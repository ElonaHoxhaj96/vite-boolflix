<script>
import SerieApp from './SerieApp.vue';
import FilmApp from './FilmApp.vue'
//import dello store 
import { store } from '../store'

export default{
    name:'MoviesCards',
    components: {
        SerieApp,
        FilmApp
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
        <h2>SERIE TV</h2>
        <div class="row ">
            <div class="col-3 col md-5" v-for="serie in store.serieList" :key="serie.id">
                <SerieApp :info="serie"/>
            </div>
        </div>
        <h2>FILM</h2>
        <div class="row">
            <div class="col-3 col md-5" v-for="film in store.filmList" :key="film.id"> 
                <FilmApp :infoFilm="film"/>
            </div>
        </div>

    </section>

</template>

<style lang="scss">
@use 'src/styles/general.scss' as *;

</style>