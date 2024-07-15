// importo il metodo per creare l'oggetto
import { reactive } from 'vue'

// creo l'oggetto e lo salvo in una variabile 
export const store = reactive({
    // array vuoto per salvare i dati richiesti all'API per le serie 
   serieList: [],
    // richiamo url dell'API per le seire 
    apiURLSeries: 'https://api.themoviedb.org/3/search/movie?api_key=0decba92338a897ff1b03e75d79c6309&query=breaking%20bad&media_type=tv',

    // array vuoto per salvare i dati richiesti all'API per i film 
    filmList: [],
    // richiamo url dell'API per le seire 
    apiURLFilm: 'https://api.themoviedb.org/3/search/movie?api_key=0decba92338a897ff1b03e75d79c6309&query=avengers&media_type=movie',

})