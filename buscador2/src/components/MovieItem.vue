<template>
    <div>
      <b-card bg-variant="light" header="movie.title" class="text-center">
        <b-card-text>{{ movie.description }}</b-card-text>
      </b-card>
    </div>
</template>

<script>
import Vuex from 'vuex';

export default {
  name: 'MovieItem',
  computed:{
      ...Vuex.mapState(['movies']),
      ...Vuex.mapGetters({ movies:'FilteredMovies' })
    }
}
</script>
