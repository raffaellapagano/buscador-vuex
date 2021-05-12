<template>
  <div class="p-5">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <h1>{{ titulo }}</h1>
    <b-form-input v-model="filters.query" placeholder="Search movies"></b-form-input>
    <button class="btn btn-primary m-3" @click="ChargeMovies">Search</button>
     <ul v-for="item of movies" :key="item.id">
          <li>{{item.title}}</li>
        </ul> -->
        <MovieApp></MovieApp>
</div>
</template>

<script>
// @ is an alias to /src
import Vuex from 'vuex'
import MovieApp from "../components/MovieApp"

export default ({
  name: 'Home',
  components: {
    MovieApp
  },
  computed:{
    ...Vuex.mapState(['titulo', 'movies', 'filters']),
    },
    methods:{
      ...Vuex.mapActions(['ChargeMovies']),
      // ...Vuex.mapGetters({
      //         movies:'FilteredMovies'
      // })

    }
})
</script>
