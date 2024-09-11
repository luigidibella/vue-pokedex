import { reactive } from "vue";

export const store = reactive ({
  apiUrl: 'https://pokeapi.co/api/v2/pokemon/',
  errorString: '',
  tempPokemon: {},
  teamPokemon: [],
  queryParams:{
    name: '',
  }
})