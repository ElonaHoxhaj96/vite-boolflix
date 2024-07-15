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
    <section class="container">
        <div class="row">
           <div class="col-6 col-md-4 col-lg-2 mb-5" v-for="movie in movieList" :key="movie.id">
                <SerieApp :info="movie"/>
           </div> 
        </div>

    </section>

</template>

<style lang="scss">
@use 'src/styles/general.scss' as *;

</style>