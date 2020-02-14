<template>
    <div id="app">
        <!-- <div class="center" v-if="loading">
            <b-spinner 
                style="width: 15vw; height: 15vw;" 
                label="Loading..."
                type="grow"
                variant="primary"
            ></b-spinner>
        </div>

        <MainComponent 
            title=" Fresh Coat of st johns" 
            sub-title="Project Budget Versus Actual Expense" 
            v-if="!loading"
            class="margin"
        /> -->

        <!-- server down -->
        <div class="div">
            <b-jumbotron bg-variant="secondary" style="margin-top: 35vh" text-variant="white">
                <b-row>
                    <b-col>
                        <h1>Oops! Server down..</h1>
                    </b-col>
                </b-row>
            </b-jumbotron>
        </div>
    </div>
</template>

<script>
    // import MainComponent from './components/MainComponent.vue'

    export default {
        name: 'app',

        components: {
            // MainComponent
        },

        mounted() {
            setTimeout(() => { this.loading = false }, 1750); 
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
        font-family: 'Roboto';
    }

    .center {
        display: flex;           /* establish flex container */
        flex-direction: column;  /* make main axis vertical */
        justify-content: center; /* center items vertically, in this case */
        align-items: center;     /* center items horizontally, in this case */
        height: 100vh;
    }

    .margin {
        margin: 2.5vh auto;
    }
</style>