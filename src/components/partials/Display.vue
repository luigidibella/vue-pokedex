<script>
import { store } from '../../data/store';

export default {
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div class="card bg-dark-subtle" style="width: 15rem;">
    <div class="square d-flex-center">
      <div class="bg-white"
        v-if="store.tempPokemon?.sprites"
      >
        <img :src="store.tempPokemon.sprites.back_default" alt="">
        <img :src="store.tempPokemon.sprites.front_default" alt="">
      </div>
      <!-- <div
        v-else-if="this.store.errorString.length > 0" 
        class="text-center"
      >
        <h4 class="my-2">{{ this.store.errorString }}</h4>
      </div> -->
      <div class="screen-container d-flex-center"
        v-else
      >
        <img src="/screen.jpg" alt="" class="screen">
      </div>
    </div>
    <!-- <img src="..." class="card-img-top" alt="..."> -->
  </div>
</template>

<style scoped>
.square {
  height: 125px;
  margin: 10px;
  border: 3px solid black;
  padding: 10px;
  /* background-color: white; */
  background-color: #231f20;
}

.screen-container {
  width: 100%;
}

.screen {
  width: 125px;
  height: 125px;
  object-fit: contain;
}
</style>