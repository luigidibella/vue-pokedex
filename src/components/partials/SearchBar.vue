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
    getApi() {
      this.store.errorString = '';
      this.store.tempPokemon = {};
      axios.get(this.store.apiUrl + this.pokemonName)
        .then(result => {
          if (result.data && result.data.name) {
            this.store.tempPokemon = result.data;
            this.store.errorString = '';
          } else {
            this.store.errorString = 'Nessun risultato trovato';
          }
        })
        .catch(error => {
          console.log(error);
          this.store.errorString = 'Nessun risultato trovato';
        });
    },
    catchPokemon() {
      if (this.store.teamPokemon.length >= 6) {
        this.store.errorString = 'Il team può avere al massimo 6 Pokémon!';
      } else if (this.store.tempPokemon && Object.keys(this.store.tempPokemon).length > 0) {
        this.store.teamPokemon.push(this.store.tempPokemon);
        this.store.errorString = '';
      } else {
        this.store.errorString = 'Nessun Pokémon da catturare';
      }
    }
    ,
    releaseLastPokemon() {
      if (this.store.teamPokemon.length > 0) {
        this.store.teamPokemon.pop();
      } else {
        console.error('La squadra è vuota, nessun Pokémon da rimuovere.');
      }
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
        @keyup.up="catchPokemon"
        @keyup.down="releaseLastPokemon"
        class="form-control mx-2" 
        type="search" 
        placeholder="Nome pokémon" 
        aria-label="Search"
      >
      <button 
        @click="catchPokemon"
        class="btn btn-danger"
      >Cattura!</button>
    </div>
  </div>
</template>

<style>

</style>