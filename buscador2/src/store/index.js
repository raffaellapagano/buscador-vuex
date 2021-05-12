import Vue from 'vue'
import Vuex from 'vuex'
import movies from './../assets/Films.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: movies,
    filters:{
      query:'',
      available: true
    }
  },
  mutations: 
  {
    SetQuery(state, value)
    {
      state.filters.query = value
    },
    SetAvailable(state)
    {
      state.filters.available = !state.filters.available
    }
  },
  getters:
  {
    FilteredMovies(state)
    {
      let movies = state.movies();
      let arrayMovie = [];
      // let movies = state.movies(movie => movie.available === state.filters.available);
      if(state.filters.query.length > 2)
      {
        return movies(movie => movie.title.toLowerCase().includes(state.filters.query));
      }
      else
      {
        for (let movie of movies)
        {
          if(movie.available === state.filters.available)
          {
            arrayMovie.push(movie)
          }
        }
          
      }
      movies = arrayMovie;
      return movies;
    }
      
  }
});