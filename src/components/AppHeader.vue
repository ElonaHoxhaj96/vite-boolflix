<script>
//import dello store 
import { store } from '../store'
export default{
    name:'AppHeader',
    data(){
        return{
            store,
        }
    }
}
</script>


<template>
    <header>
        <nav>
            <div id="logo">
                <a href="#"><h1>BOOLFLIX</h1></a>
            </div>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="store.searchQuery">
                <button class="btn btn-outline-success" type="submit" @click.prevent="$emit('search')">Search</button>
            </form>
        </nav>
    </header>

</template>

<style lang="scss">
header{
    height: 70px;
}
nav{
    background-color: black;
    height: 70px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
        h1{
            color: red;
        }
}
   

</style>