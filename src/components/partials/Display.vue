<script>
import { store } from '../../data/store';
import Spinner from './Spinner.vue';

export default {
  data(){
    return{
      store,
      showFrontImage: true
    }
  },

  components: {
    Spinner,
  },

  computed: {
    loading() {
      return store.loading;
    }
  },

  methods: {
    startImageRotation() {
      setInterval(() => {
        this.showFrontImage = !this.showFrontImage;
      }, 2000);
    }
  },
  
  mounted() {
    this.startImageRotation();
  }
}
</script>

<template>
  <div class="card bg-dark-subtle" style="width: 15rem;">
    <div class="square d-flex-center">
      <div class="bg-white w-100 d-flex-center"
        v-if="store.tempPokemon?.sprites"
      >
        <img
          v-if="showFrontImage"
          :src="store.tempPokemon.sprites.front_default"
          alt="Front Sprite"
        >
        <img
          v-else
          :src="store.tempPokemon.sprites.back_default"
          alt="Back Sprite"
        >
      </div>
      <div class="screen-container d-flex-center"
        v-else
      >
        <div v-if="loading" class="text-danger">
          <Spinner />
        </div>
        <img v-else src="/screen.jpg" alt="" class="screen">
      </div>
    </div>
  </div>
</template>

<style scoped>
.square {
  height: 125px;
  margin: 10px;
  border: 3px solid black;
  padding: 10px;
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