import axios from "axios"

const MovieBaseUrl = "https://api.themoviedb.org/3"
const api_key ='25111d1632ef3c24ddaa96d939dd817f'

const getTrendingMovies = axios.get(MovieBaseUrl+'/trending/movie/day?api_key='+api_key)




export default{

    getTrendingMovies
}