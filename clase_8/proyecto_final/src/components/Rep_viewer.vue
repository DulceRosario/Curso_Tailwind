<template>
    <div class="bg-white flex flex-col">
    
        <div class="loader" id="loader" style="display: block;"></div>
        <canvas id="animation" style="display: block;" class="m-auto" width="480" height="680"></canvas>
        <hr class="my-5"/>
        <div name="controls" class="w-fix m-auto ">
            <div class=" m-auto ">
                <button type="button" v-on:click="go2image(this.first_image)" class="btn btn-light btn-custom" data-toggle="tooltip" data-placement="bottom" title="Ir a la primera imagen">
                    <i class="material-icons">skip_previous</i>
                </button>
    
                <button type="button" id="btn_rev" v-show="stat" v-on:click="rev()" class="btn btn-light btn-custom" data-toggle="tooltip" data-placement="bottom" title="Reversa">
                    <i class="material-icons">replay</i>
                </button>
                <button type="button" id="btn_prev" v-show="!stat" v-on:click="go2image(--this.current_image)" class="btn btn-light btn-custom" data-toggle="tooltip" data-placement="bottom" title="Imagen anterior">
                    <i class="material-icons">navigate_before</i>
                </button>
                <button type="button" id="btn_stop" v-show="stat" v-on:click="stop()" class="btn btn-light btn-custom" data-toggle="tooltip" data-placement="bottom" title="Pausa">
                    <i class="material-icons">pause</i>
                </button>
    
                <button type="button" id="btn_play" v-show="!stat" v-on:click="fwd()" class="btn btn-light btn-custom" data-toggle="tooltip" data-placement="bottom" title="Play">
                    <i class="material-icons">play_arrow</i>
                </button>
    
                <button type="button" id="btn_next" v-show="!stat" v-on:click="go2image(++this.current_image)" class="btn btn-light btn-custom" data-toggle="tooltip" data-placement="bottom" title="Imagen siguiente">
                    <i class="material-icons">navigate_next</i>
                </button>
    
                <button type="button" v-on:click="go2image(this.last_image)" class="btn btn-light btn-custom" data-toggle="tooltip" data-placement="bottom" title="Ir a la última imagen">
                    <i class="material-icons">skip_next</i>
                </button>
    
                <label for="frame_nr" class="small">&nbsp;Imagen&nbsp;</label>
                <input type="text" name="frame_nr" v-model.number="current_image" class="w-20 border-2 border-solid border-gray-400" />
                <span class="small"> &nbsp;<span id="lastimage"></span> / {{this.last_image - 1}} </span>
    
            </div>
        </div>
       <hr class="my-5"/>
    
    </div>
    </template>
    
    <script>
    export default {
        name: 'prod_viewer',
        props: {
            prod_name: {
                type: String,
                default: 'Dulce'
            },
            images_array: Array,
            prod_path: {
                type: String,
                default: '/'
            },
            animation_height: {
                type: [String, Number],
                default: '680'
            },
            animation_width: {
                type: [String, Number],
                default: '480'
            }
    
        },
        data() {
            return {
                theImages: [],
                items: [],
                stat: 1,
                terminoDeCargar: false,
                justonce: 1,
                index: 0,
                ultimaImagenCargada: 0,
                normal_delay: 1000,
                delay: 1000,
                delay_step: 10,
                delay_max: 30000,
                delay_min: 1,
                current_image: 0,
                timeID: null,
                size_valid: 0,
                loadCount: 1,
                last_image: 0,
                lewidth: 0,
                leheight: 0,
                speed_text: 1,
                myCanvas: null,
                canvasContext: null,
                first_image: 0,
                playmode: true
    
            }
        },
        watch: {
            images_array(newval) {
                this.terminoDeCargar = false
                this.loadCount = 1
                this.myCanvas = document.getElementById('animation')
                this.last_image = newval.length
                this.canvasContext = this.myCanvas.getContext('2d')
                this.images_name = newval
    
                this.launch()
            },
            speed_text(newval) {
                if (newval > 10) {
                    this.speed_text = 10
                } else if (newval < 0) {
                    this.speed_text = 0
                }
    
                this.change_speed((this.speed_text * 100) - 100)
            },
            current_image(newval) {
                if (newval > this.last_image) {
                    this.current_image = this.last_image
                } else if (newval < 0) {
                    this.current_image = 0
                }
            }
        },
        methods: {
            initImages() {
                for (var i = 0; i < this.last_image; i++) {
                    this.theImages[i] = new Image()
                    this.theImages[i].src = this.images_name[i]
                    this.theImages[i].onload = this.imagesloaded
                    this.current_image = i
                    //  document.control_form.frame_nr.value = this.current_image + 1
                }
            },
            toggledisplay(elementID) {
                (function (style) {
                    style.display = style.display === 'none' ? '' : 'none'
                })(document.getElementById(elementID).style)
            },
            draw_slide(image) {
                if (image !== false) {
                    if (image) {
                        let height,width
                        this.MAX_WIDTH = document.getElementById('animation').clientWidth
                        
    
                        if (image.width > this.MAX_WIDTH) {
                            height = image.height * (this.MAX_WIDTH / image.width);
                            width = this.MAX_WIDTH;
                        }
                        else{
                            height = image.height
                            width = image.width
    
                        }
                        
                        document.getElementById('animation').style.display = 'block'
                        document.getElementById('animation').width = width
                        document.getElementById('animation').height = height
                        this.canvasContext.clearRect(0, 0, width, height)
                        //this.canvasContext.drawImage(image, 0, 0, image.width, image.height, 0, 0, image.width, image.height)
                        this.canvasContext.drawImage(image, 0, 0, width, height)
                    }
                }
            },
            rmBadImageCheck(items, callback) {
                var x = items.length
                if (this.index >= x) {
                    this.last_image = items.length
                    return callback(items)
                }
                var img = new Image()
                img.src = items[this.index].src
    
                // if error, splice the item from the array, and check the next one which will be on the same index because of the splice call (that's why we don't increment index)
                img.onerror = function () {
                    items.splice(this.index, 1)
                    this.rmBadImageCheck(items, callback)
                }
                // if success, keep the item but increment index to point to the next item and check it
                img.onload = function () {
                    this.index++
                    this.rmBadImageCheck(items, callback)
                }
            },
            launch() {
                if (!this.terminoDeCargar) {
                    console.log('inicio de imagenes')
                    this.initImages()
                }
    
                this.current_image = this.first_image
                //   document.control_form.speed.value = this.speed_text
                // Drawing the default version of the image on the canvas:
                this.draw_slide(this.theImages[this.current_image])
            },
            imagesloaded() {
                if (this.justonce === 1) {
                    this.lewidth = this.animation_width
                    this.leheight = this.animation_height
                    //this.myCanvas.width = this.animation_width
                    //this.myCanvas.height = this.animation_height
                    this.justonce++
                }
    
                if (this.loadCount === this.last_image) {
                    this.terminoDeCargar = true
                    this.toggledisplay('loader')
                    this.toggledisplay('animation')
                    this.fwd()
                }
                this.loadCount++
    
            },
            imageOnError() {
                // image did not load
            },
            rev() {
                var element = document.getElementById('btn_rev')
                element.classList.toggle('btn_rev_pressed')
                clearTimeout(this.timeID)
                this.stat = 1
    
                if (this.toggleRev === 1) {
                    this.animate_rev()
                    document.getElementById('btn_rev').onclick = this.animate_fwd
                    this.toggleRev++
                } else {
                    this.animate_fwd()
                    document.getElementById('btn_rev').onclick = this.rev
                    this.toggleRev--
                }
            },
            go2image(number) {
                if (number > this.last_image) {
                    number = this.first_image
                }
                if (number < this.first_image) {
                    number = this.last_image
                }
                this.current_image = number
                this.draw_slide(this.theImages[this.current_image])
                // document.control_form.frame_nr.value = this.current_image + 1
            },
            fwd() {
                stop()
                this.stat = 1
                this.animate_fwd()
            },
            stop() {
                this.stat = 0
                clearTimeout(this.timeID)
                this.toggledisplay('btn_play')
                this.toggledisplay('btn_stop')
                this.toggledisplay('btn_ffwd')
                this.toggledisplay('btn_frwd')
                this.toggledisplay('btn_next')
                this.toggledisplay('btn_prev')
                this.toggledisplay('btn_rev')
    
            },
            change_speed(dv) {
                if (dv < 0) {
                    this.speed_text++
                } else {
                    this.speed_text--
                }
    
                this.delay += dv
    
                //  document.control_form.speed.value = this.speed_text
    
                if (this.delay > this.delay_max) this.delay = this.delay_max
                if (this.delay < this.delay_min) this.delay = this.delay_min
            },
            animate_rev() {
                this.current_image--
                if (this.current_image < this.first_image) {
                    if (this.playmode === false) {
                        this.current_image = this.first_image
                        this.stat = 0
                        return
                    } // NORMAL
                    if (this.playmode === true) {
                        this.current_image = this.last_image // LOOP
                    }
                }
                this.draw_slide(this.theImages[this.current_image])
                // document.control_form.frame_nr.value = this.current_image + 1
                this.timeID = setTimeout(this.animate_rev, this.delay)
            },
            animate_fwd() {
                if (this.toggleRev === 2) {
                    var element = document.getElementById('btn_rev')
                    element.classList.toggle('btn_rev_pressed')
                    element.onclick = this.rev
                    this.toggleRev--
                }
    
                clearTimeout(this.timeID)
                this.stat = 1
                this.current_image++
                if (this.current_image > this.last_image) {
                    if (this.playmode === false) {
                        this.current_image = this.last_image
                        this.stat = 0
                        return
                    } // NORMAL
                    if (this.playmode === true) {
                        this.current_image = this.first_image // LOOP
                    }
                }
                this.draw_slide(this.theImages[this.current_image])
                //  document.control_form.frame_nr.value = this.current_image + 1
                this.timeID = setTimeout(this.animate_fwd, this.delay)
            }
    
        },
        mounted() {
            this.terminoDeCargar = false
    
        }
    
    }
    </script>
    
    <style>
    
    </style>
    