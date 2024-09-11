import { reactive } from "vue";

export const store = reactive({
  apiUrl: 'https://pokeapi.co/api/v2/pokemon/',
  errorString: '',
  tempPokemon: {},
  teamPokemon: JSON.parse(localStorage.getItem('teamPokemon')) || [], // Carica i Pokémon dal localStorage
  queryParams: {
    name: '',
  },

  // Metodo per salvare i dati del team nel localStorage
  saveTeam() {
    localStorage.setItem('teamPokemon', JSON.stringify(this.teamPokemon));
  },

  // Metodo per caricare i dati dal localStorage (opzionale se non usi reactive direttamente)
  loadTeam() {
    const savedTeam = localStorage.getItem('teamPokemon');
    if (savedTeam) {
      this.teamPokemon = JSON.parse(savedTeam);
    }
  }
})
