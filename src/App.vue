<template>
    <div id="app">
        <div class="d-flex justify-content-center">
            <b-spinner 
                style="width: 10vw; height: 10vw; margin-top: 50%" 
                label="Loading..."
                type="grow"
                variant="primary"
                v-if="loading"
            ></b-spinner>
        </div>

        <MainComponent 
            title="Fresh Coat of NW San Antonio" 
            sub-title="Project Budget Versus Actual Expense" 
            v-if="!loading"
        />
    </div>
</template>

<script>
    import MainComponent from './components/MainComponent.vue'

    export default {
        name: 'app',

        components: {
            MainComponent
        },

        mounted() {
            setTimeout(() => { this.loading = false }, 2000); 
        },

        data() {
            return {
                loading: true
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    #app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin: 2.5vh 0;
        font-family: 'Roboto';
    }
</style>