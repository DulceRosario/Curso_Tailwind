<template >
    <h1> {{ prod_name }}</h1>
    <div>
        <Rep_viewer v-bind:images_array="images" :prod_name="prod_selected" ></Rep_viewer>
    </div>
</template>

<script >
import Rep_viewer from '../components/Rep_viewer.vue';
export default {
    name: 'Producto',
    components: { Rep_viewer },
    data() {
        return{
            prod_selected:'',
            images:[],
            prod_name:'',
            id_prod:''
        }
        
    },
    methods: {

    }
}


</script>
<style lang="">
    
</style>
