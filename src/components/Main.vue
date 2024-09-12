<script>
import SearchBar from './partials/SearchBar.vue';
import Display from './partials/Display.vue';
import Stats from './partials/Stats.vue';
import Team from './partials/Team.vue';

export default {
  components: {
    SearchBar,
    Display,
    Stats,
    Team
  }
}
</script>

<template>
  <main>
    <div class="my-container flex-sm-row vh-100">
      <div class="my-col">
        <SearchBar />
        <Display />
        <Stats />
      </div>
      <div class="my-col p-1">
        <Team />
      </div>
    </div>
  </main>
</template>

<style>
main {
  width: 100vw;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: #ced4da;
}

.my-container {
  width: 800px;
  height: 500px;
  
  display: flex;
  flex-direction: column;
  
  border: 1px solid black;
  border-radius: 10px;
  background-color: #7e0000;
  
  padding: 15px;
  gap: 15px;
}

.my-col {
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  
  border: 1px solid white;
  background-color: #b60b0c;
}

@media (min-width: 576px) {
  .my-container {
    max-height: 500px;
  }
}
</style>