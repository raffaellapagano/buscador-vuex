<template>
    <div>
        <div class="row" v-if="movies.lenght > 0">
            <MovieItem :movie="movie" v-for="movie in movies" :key="movie.id"/>
        </div>

        <div class="alert alert danger" v-else>No hay peliculas disponibles</div>
    </div>
</template>

<script>

import MovieItem from './MovieItem'
import Vuex from 'vuex';

export default({
    name: 'MovieList',
    components:{
        MovieItem
    },
    computed:{
        
        ...Vuex.mapGetters({ movies:'FilteredMovies' })
    }
    
})

</script>
