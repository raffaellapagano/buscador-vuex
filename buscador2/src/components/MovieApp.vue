<template>
    <div>
        <MovieSearch></MovieSearch>

        <div></div>

        <MovieList></MovieList>
    </div>
</template>

<script>
import MovieList from './MovieList'
import MovieSearch from './MovieSearch'
export default ({
    name: 'MovieApp',
    components:{
        MovieList,
        MovieSearch
    }
})
</script>

<style scoped>

</style>
