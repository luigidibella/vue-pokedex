<script>
import { store } from '../../data/store';

export default {
  data(){
    return{
      store
    }
  },

  computed: {
    formattedTypes() {
      return this.store.tempPokemon?.types?.map(typeInfo => typeInfo.type.name).join(' / ') || '';
    }
  }
}
</script>

<template>
  <div class="card bg-success m-1" style="width: 278px;">
    <div class="square">
      <div
        v-if="this.store.errorString.length > 0" 
        class="d-flex-center h-100 text-center"
      >
        <h4 class="my-2">{{ this.store.errorString }}</h4>
      </div>
      <div v-else-if="Object.keys(this.store.tempPokemon).length > 0">
        <p class="card-text text-capitalize">
          <span class="fw-bold">Name:</span> {{ store.tempPokemon.name }}
        </p>
        <p class="card-text text-capitalize">
          <span class="fw-bold">Type:</span> {{ formattedTypes }}
        </p>
        <p class="card-text">
          <span class="fw-bold">Height:</span> {{ store.tempPokemon.height }}''
        </p>
        <p class="card-text">
          <span class="fw-bold">Weight:</span> {{ store.tempPokemon.weight }} lbs.
        </p>
        <p class="card-text">
          <span class="fw-bold">Stats</span>
        </p>
        <div v-for="(stat, index) in store.tempPokemon.stats" :key="index" class="d-flex justify-content-between align-items-center">
          <p class="card-text">
            <span>{{ stat.stat.name }}</span> <!-- Nome della statistica -->
          </p>
          <div class="progress w-50" role="progressbar" aria-label="Basic example" :aria-valuenow="stat.base_stat" aria-valuemin="0" aria-valuemax="100" style="height: 5px">
            <div class="progress-bar bg-black" :style="{ width: `${stat.base_stat}%` }"></div> <!-- Valore della statistica come larghezza -->
          </div>
        </div>
      </div>
      <p v-else class="d-flex-center h-100">
        Statistiche
      </p>
    </div>
  </div>
</template>

<style scoped>
.square {
  height: 250px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  background-color: #2bd40c;
}

.square p {
  margin: 0;
  line-height: 130%;
}
</style>