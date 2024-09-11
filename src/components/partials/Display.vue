<script>
import { store } from '../../data/store';

export default {
  
  data(){
    return{
      store,
      pokemonName: ''
    }
  },
}

</script>

<template>
  <div class="card bg-dark-subtle" style="width: 15rem;">
    <div class="square d-flex-center">
      <div
        v-if="this.store.errorString.length > 0" 
        class="text-center"
      >
        <h4 class="my-2">{{ this.store.errorString }}</h4>
      </div>
      <div
        v-else-if="store.tempPokemon?.sprites"
      >
        <img :src="store.tempPokemon.sprites.back_default" alt="">
        <img :src="store.tempPokemon.sprites.front_default" alt="">
      </div>
      <div
        v-else
      >
        Display
      </div>
    </div>
    <!-- <img src="..." class="card-img-top" alt="..."> -->
  </div>
</template>

<style scoped>
.square {
  height: 150px;
  margin: 10px;
  border: 3px solid black;
  padding: 10px;
  background-color: white;
}

</style>