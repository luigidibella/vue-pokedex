<script>
import { store } from '../../data/store';

export default {
  computed: {
    loading() {
      return store.loading;
    }
  }
}
</script>

<template>
  <div v-if="loading" class="spinner-grow" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</template>

<style>

</style>