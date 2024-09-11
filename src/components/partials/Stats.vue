<script>
import { store } from '../../data/store';

export default {
  data() {
    return {
      store,
    }
  },

  computed: {
    formattedTypes() {
      return this.store.tempPokemon?.types?.map(typeInfo => typeInfo.type.name).join(' / ') || '';
    },
  },
}
</script>

<template>
  <div class="card bg-success" style="width: 18rem;">
    <div class="square">
      <div
        v-if="this.store.errorString.length > 0" 
        class="text-center"
      >
        <h4 class="my-2">{{ this.store.errorString }}</h4>
      </div>
      <div v-else-if="Object.keys(this.store.tempPokemon).length > 0">
        <p class="card-text text-capitalize">
          Name: {{ store.tempPokemon.name }}
        </p>
        <p class="card-text text-capitalize">
          Type: {{ formattedTypes }}
        </p>
        <p class="card-text">
          Height: {{ store.tempPokemon.height }}''
        </p>
        <p class="card-text">
          Weight: {{ store.tempPokemon.weight }} lbs.
        </p>
      </div>
      <p v-else class="d-flex-center h-100">
        Stats
      </p>
    </div>
  </div>
</template>

<style scoped>
.square {
  height: 180px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  background-color: #2bd40c;
}
</style>