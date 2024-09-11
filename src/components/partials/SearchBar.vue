<script>
import axios from 'axios';
import { store } from '../../data/store';

export default {

  data(){
    return{
      store,
      pokemonName: ''
    }
  },

  methods: {
    getApi(){
      this.store.errorString = '';
      axios.get(this.store.apiUrl + this.pokemonName)
      .then(result => {
        console.log(`Il mio pokémon:`, result.data);
      })
      .catch(error => {
        console.log(error);
        this.store.errorString = 'Nessun risultato trovato'
      })
    }
  },

  mounted() {
    // this.getApi()
  },
}

</script>

<template>
  <div>
    <div class="d-flex" role="search">
      <button 
        @click="getApi"
        class="btn btn-success" 
        type="button"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      <input
        v-model.trim="pokemonName"
        @keyup.enter="getApi"
        class="form-control mx-2" 
        type="search" 
        placeholder="Nome pokémon" 
        aria-label="Search"
      >
      <button 
        class="btn btn-danger"
      >Cattura!</button>
    </div>
  </div>
</template>

<style>

</style>