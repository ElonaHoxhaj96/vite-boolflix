<script>
import { info } from 'sass';
import { store } from '../store';

export default{
    name:'SerieApp',
    props: {
        info: Object,
    },
    data(){
        return{
            store,
        }
    }
}
</script>

<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="`https://image.tmdb.org/t/p/w342/${info.poster_path}`" :alt="info.title">
            </div>
            <div class="flip-card-back">
               <div><strong>Titolo:</strong> {{ info.title }} </div>
               <div><strong>Titolo Originale: </strong>{{ info.original_title }}</div>
               <div><strong>Lingua: </strong> {{ info.original_language }} </div>
               <div><strong>Voto: </strong>{{ info.vote_average }} </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use 'src/styles/general.scss' as *;
  
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
    margin-top: 2rem ;
  background-color: transparent;
  width: calc(100vw / 6 - 2rem);
  height: 350px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #bbb;
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color:black;
  color: white;
  transform: rotateY(180deg);
}
img{
    width: 100%;
}
    
</style>