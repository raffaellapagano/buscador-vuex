<template>
    <div>
        <div>
            <input type="text" v-model="search">
        </div>

        <div>
            <label for="available">Available </label>
            <input type="radio" v-model="available" :value="true">
        </div>

        <div>
            <label for="available">No available </label>
            <input type="radio" v-model="available" :value="false">
        </div>
    </div>
</template>

<script>
import store from "./../store/index"
export default ({
    name: 'MovieSearch',
    computed: 
    {
        search: 
        {
            get()
            {
                return store.state.filters.query;
            },
            set(value)
            {
                store.commit("SetQuery", value);
            }
        },
        available:
        {
            get()
            {
                return store.state.filters.available;
            },
            set(value)
            {
                store.commit("SetAvailable", value);
            }
        }
    }
})
</script>
