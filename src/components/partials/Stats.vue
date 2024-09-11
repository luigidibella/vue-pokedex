<script>
import { store } from '../../data/store';

export default {
  data() {
    return {
      store,
    };
  },

  computed: {
    formattedTypes() {
      return this.store.tempPokemon?.types?.map(typeInfo => typeInfo.type.name).join(' / ') || '';
    },
  },
};
</script>

<template>
  <div class="card bg-success" style="width: 18rem;">
    <div class="square">
      <p v-if="store.tempPokemon?.name" class="card-text text-capitalize">
        Name: {{ store.tempPokemon.name }}
      </p>
      <p v-if="formattedTypes" class="card-text text-capitalize">
        Type: {{ formattedTypes }}
      </p>
      <p v-if="store.tempPokemon?.height !== undefined" class="card-text">
        Height: {{ store.tempPokemon.height }}''
      </p>
      <p v-if="store.tempPokemon?.weight !== undefined" class="card-text">
        Weight: {{ store.tempPokemon.weight }} lbs.
      </p>
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