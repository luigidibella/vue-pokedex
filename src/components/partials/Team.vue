<script>
import { store } from '../../data/store';

export default {
  data(){
    return{
      store,
    }
  },
  
  methods: {
    releasePokemon(index) {
      this.store.teamPokemon.splice(index, 1);
      this.store.saveTeam(); // Salva il team aggiornato nel localStorage
      
      if (this.store.teamPokemon.length > 0) {
        this.store.tempPokemon = this.store.teamPokemon[this.store.teamPokemon.length - 1];
      } else {
        this.store.tempPokemon = {};
      }
    },
    showPokemon(pokemon) {
      this.store.errorString = '';
      this.store.tempPokemon = pokemon;
    }
  },
}
</script>

<template>
  <div class="square pb-3">
    <div v-if="this.store.teamPokemon.length === 0" class="d-flex-center h-100">
        Team
    </div>
    <div 
      v-else
      v-for="(pokemon, index) in this.store.teamPokemon"
      :key="pokemon.id"
      class="d-flex align-items-end text-capitalize"
    >
      <img :src="pokemon.sprites.versions['generation-viii'].icons.front_default" alt="">
      <a @click.prevent="showPokemon(pokemon)" href="#" class="m-0">{{ pokemon.name }}</a>
      <div @click="releasePokemon(index)" class="btn btn-danger ms-auto me-2">X</div>
    </div>
  </div>
</template>

<style scoped>
.square {
  width: 80%;
  height: 80%;
  background-color: white;
  border:  1px solid black;
}
</style>