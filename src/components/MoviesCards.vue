<script>
import SerieApp from './SerieApp.vue';
//import dello store 
import { store } from '../store'

export default{
    name:'MoviesCards',
    components: {
        SerieApp,
    },
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <section class="container-fluid">
        <div class="row ">
            <div class="col " v-for="serie in store.serieList" :key="serie.id">
                <SerieApp :info="serie"/>
            </div>
        </div>

    </section>

</template>

<style lang="scss">
@use 'src/styles/general.scss' as *;

</style>