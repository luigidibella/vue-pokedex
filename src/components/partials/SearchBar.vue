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
      const pokemonNameLowercase = this.pokemonName.toLowerCase();
      axios.get(this.store.apiUrl + pokemonNameLowercase)
        .then(result => {
          if (result.data && result.data.name) {
            this.store.tempPokemon = result.data;
            this.store.errorString = '';
          } else {
            this.store.errorString = 'Nessun Pokémon trovato';
          }
        })
        .catch(error => {
          console.log(error);
          this.store.errorString = 'Nessun Pokémon trovato';
        });
    },
    catchPokemon() {
      if (this.store.teamPokemon.length >= 6) {
        this.store.errorString = 'La squadra può avere al massimo 6 Pokémon!';
      } else if (this.store.tempPokemon && Object.keys(this.store.tempPokemon).length > 0) {
        this.store.teamPokemon.push(this.store.tempPokemon);
        this.store.errorString = '';
        this.store.saveTeam(); // Salva il team aggiornato nel localStorage
      } else {
        this.store.errorString = 'Nessun Pokémon da catturare';
      }
    },
    releaseLastPokemon() {
      if (this.store.teamPokemon.length > 0) {
        this.store.teamPokemon.pop();
        this.store.saveTeam(); // Salva il team aggiornato nel localStorage
      } else {
        console.error('La squadra è vuota, nessun Pokémon da rimuovere.');
      }
    }
  },

  mounted() {
    this.store.loadTeam();
  }
}
</script>

<template>
  <div class="d-flex m-1" role="search">
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
      id="search"
      class="form-control mx-2" 
      type="search" 
      placeholder="Nome pokémon" 
      aria-label="Search"
    >
    <button 
      @click="catchPokemon"
      class="btn btn-danger"
    >
      <img src="/pokeball.svg" alt="" class="invert-colors">
      <!-- <span class="catch-text">Cattura!</span> -->
    </button>
  </div>
</template>

<style>
.invert-colors {
  filter: invert(1);
}
</style>