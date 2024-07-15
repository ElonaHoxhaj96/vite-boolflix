<script>
//importiamo axios
import axios from '../node_modules/axios';
// importazione file 
import AppHeader from './components/AppHeader.vue'
import MoviesCards from './components/MoviesCards.vue'
//import store
import { store } from './store';
export default {
    name:'App',
    components:{
        AppHeader,
        MoviesCards,
    },
    data(){
        return{
            store,
        }
    },
    methods: {
        getMovie(){
            let endPoint = store.apiURLSeries;

            axios.get(endPoint)
            .then( res => {
                console.log(res.data.results);
                store.serieList = res.data.results;
            })
            .catch(err => {
            console.log(err);
        })
        }
    },
    created(){
            this.getMovie();
        }
}
</script>

<template>
    <AppHeader/>
    <main>
        <MoviesCards/>
    </main>
 
</template>

<style lang="scss">
@use 'src/styles/general.scss' as *;
main{
    min-height: calc(100vh - 70px);
    background-color: rgb(59, 59, 59);
}

</style>
