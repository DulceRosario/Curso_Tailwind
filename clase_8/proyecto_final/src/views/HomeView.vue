<template>
<main class="flex flex-wrap md:grid-cols-2 lg:grid-cols-3 gap-3 sm:my-2 md:my-5 ">

    <div class="w-full relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center border-b-4 border-t-4 border-orange_ica-700 bg-[url('images/goes16.jpg')] h-[200px] md:h-[300px] " style="background-image: ; ">
        <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" >
            <div class="flex h-full items-center justify-center">
                <div class="text-white">
                    <h1 class="mb-4 text-5xl font-semibold">Satelite GOES-16</h1>
                    <h4 class="mb-6 text-2xl font-semibold">Productos RGB</h4>
               
                </div>
            </div>
        </div>
    </div>

    <!--Tabs navigation-->
    <ul class="my-10 flex list-none flex-row flex-wrap mx-auto border-b-0 pl-0 text-lg " role="tablist" data-te-nav-ref>
        <li role="presentation">
            <a href="#tabs-home" class=" my-2  border-x-0 border-b-2 border-t-0 border-transparent px-3 md:px-7 pb-3.5 pt-4 font-bold uppercase leading-tight text-blue_ica-950 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-orange_ica-800 data-[te-nav-active]:text-orange_ica-800 " data-te-toggle="pill" data-te-target="#tabs-home" data-te-nav-active role="tab" aria-controls="tabs-home" aria-selected="true">Republica Mexicana</a>
        </li>
        <li role="presentation">
            <a href="#tabs-profile" class="my-2  border-x-0 border-b-2 border-t-0 border-transparent px-3 md:px-7 pb-3.5 pt-4  font-bold uppercase leading-tight text-blue_ica-950 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-orange_ica-800 data-[te-nav-active]:text-orange_ica-800 " data-te-toggle="pill" data-te-target="#tabs-profile" role="tab" aria-controls="tabs-profile" aria-selected="false">Centro de México </a>
        </li>

    </ul>

    <!--Tabs content-->
    <div class="mb-6 mx-0 md:mx-5">
        <div class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab" data-te-tab-active>
            <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3">

                <div class="col-auto bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-2 " v-for="prod in dom1_prods">
                    <div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                        <img class="m-2" :src="prod.image" alt="" />
                        <a href="#!">
                            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                            </div>
                        </a>
                    </div>
                    <div class="p-6">
                        <h5 class="mb-2 text-xl font-bold leading-tight text-blue_unam-950 dark:text-neutral-50">
                            {{ prod.prod }}
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                          {{ prod.descrip }}
                        </p>
                        <ul role="list" class="marker:text-orange_ica-800 list-disc pl-5 space-y-3  font-semibold ">
                            <li class="text-green_ica-600 decoration-green_ica-600 hover:decoration-blue_ica-700 hover:text-blue_ica-700 underline ">
                                <a href=""> Imagen simple</a>
                            </li>
                            <li class="text-green_ica-600 decoration-green_ica-600 hover:decoration-blue_ica-700 hover:text-blue_ica-700 underline ">
                                <a href=""> Animación</a>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>

        <div class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
            <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3">

                <div class="col-auto bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-2 " v-for="prod in dom2_prods">
                    <div class="relative overflow-hidden bg-cover bg-no-repeat" data-te-ripple-init data-te-ripple-color="light">
                        <img class="m-2" :src="prod.image" alt="" />
                        <a href="#!">
                            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                            </div>
                        </a>
                    </div>
                    <div class="p-6">
                      <h5 class="mb-2 text-xl font-bold leading-tight text-blue_unam-950 dark:text-neutral-50">
                            {{ prod.prod }}
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                          {{ prod.descrip }}
                        </p>
                        <ul role="list" class="marker:text-orange_ica-800 list-disc pl-5 space-y-3  font-semibold ">
                            <li class="text-green_ica-600 decoration-green_ica-600 hover:decoration-blue_ica-700 hover:text-blue_ica-700 underline ">
                                <a href=""> Imagen simple</a>
                            </li>
                            <li class="text-green_ica-600 decoration-green_ica-600 hover:decoration-blue_ica-700 hover:text-blue_ica-700 underline ">
                                <a href=""> Animación</a>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>

    </div>

</main>

<!-- overlay -->
<div id="modal_overlay" v-show="display" class=" absolute inset-0 bg-black bg-opacity-30 h-screen w-full flex justify-center items-start md:items-center pt-10 md:pt-0">

    <!-- modal -->
    <div id="modal" class="pacity-0 transform -translate-y-full scale-120  relative w-11/12 md:w-4/6 h-fix md:h-11/12 bg-white rounded shadow-lg transition-opacity transition-transform duration-300">

        <!-- button close -->
        <button v-on:click="openModal(false)" class="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-xl w-7 h-7 rounded-full focus:outline-none text-white">
            &cross;
        </button>

        <!-- header -->
        <div class="px-4 py-2 border-b border-gray-200">
            <h2 class="text-xl font-semibold text-gray-600">Title</h2>
        </div>

        <!-- body -->
        <div class="w-full p-3 scroll-auto ">

            <img class="object-none " src="true_color_2023.0313.1610_rep.png" alt="">

        </div>

    </div>

</div>
</template>

<script>
import {
    Tab,
    Ripple,
    initTE,
} from "tw-elements";

export default {

    data() {

        return {
            prodselected: "",
            display: false,
            dom2_prods: [{
                "dominio": "came",
                "prod": "Masas de aire",
                "descrip":"Se utiliza para diagnosticar el entorno que rodea a los sistemas sinópticos mejorando las características de temperatura y humedad de las masas de aire",
                "image": "productos/airmass_2023.0628.2200_came.png"
            }, {
                "dominio": "came",
                "prod": "Temperatura de Incendios",
                "descrip":"Permite identificar dónde están ocurriendo los incendios más intensos y diferenciarlos de los incendios \"más fríos\".",
                "image": "productos/fire_temp_2023.0628.2200_came.png"
            }, {
                "dominio": "came",
                "prod": "Color verdadero",
                "descrip":"Ofrece una imagen que es aproximadamente como lo verías desde el espacio exterior. ",
                "image": "productos/true_color_2023.0628.2200_came.png"
            }, {
                "dominio": "came",
                "prod": "Vapor de Agua",
                "descrip":"Discriminar la distribución de vapor de agua atmosférico. Permite a un pronosticador para distinguir dónde está el retorno de la humedad ocurre en ausencia de nubes.",
                "image": "productos/water_vapor_2023.0628.2200_came.png"
            }],
            dom1_prods: [{
                "dominio": "rep",
                "prod": "Masas de aire",
                "descrip":"Se utiliza para diagnosticar el entorno que rodea a los sistemas sinópticos mejorando las características de temperatura y humedad de las masas de aire",
                "image": "productos/airmass_2023.0628.2200_rep.png"
            }, {
                "dominio": "rep",
                "prod": "Temperatura de Incendios",
                "descrip":"Permite identificar dónde están ocurriendo los incendios más intensos y diferenciarlos de los incendios \"más fríos\".",
                "image": "productos/fire_temp_2023.0628.2200_rep.png"
            }, {
                "dominio": "rep",
                "prod": "Color Verdadero",
                "descrip":"Ofrece una imagen que es aproximadamente como lo verías desde el espacio exterior. ",
                "image": "productos/true_color_2023.0628.2200_rep.png"
            }, {
                "dominio": "rep",
                "prod": "Vapor de Agua",
                "descrip":"Discriminar la distribución de vapor de agua atmosférico. Permite a un pronosticador para distinguir dónde está el retorno de la humedad ocurre en ausencia de nubes.",
                "image": "productos/water_vapor_2023.0628.2200_rep.png"
            }]
        }
    },
    mounted() {
        initTE({
            Tab
        });
        initTE({
            Ripple
        });

    },

    methods: {

        async openModal(value) {
            const modal_overlay = document.querySelector('#modal_overlay');
            const modal = document.querySelector('#modal');
            const modalCl = modal.classList
            const overlayCl = modal_overlay
            this.display = value

            if (value) {

                setTimeout(() => {
                    modalCl.remove('opacity-0')
                    modalCl.remove('-translate-y-full')
                    modalCl.remove('scale-150')
                }, 100);
            } else {
                modalCl.add('-translate-y-full')
                setTimeout(() => {
                    modalCl.add('opacity-0')
                    modalCl.add('scale-150')
                }, 100);
                setTimeout(() => this.display = false, 300);
            }
        },

    }

}
</script>
