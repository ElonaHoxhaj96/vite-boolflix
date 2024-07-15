// importo il metodo per creare l'oggetto
import { reactive } from 'vue'

// creo l'oggetto e lo salvo in una variabile 
export const store = reactive({
    // array vuoto per salvare i dati richiesti all'API
    movieList: [],
    // richiamo url dell'API
    apiURL: 'https://api.themoviedb.org/3/search/movie?api_key=0decba92338a897ff1b03e75d79c6309&query=results'
})