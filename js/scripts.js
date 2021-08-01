
let pokemonList = [
  {
  	name: 'Jigglypuff',
  	height: 50,
  	types: ['fairy', 'normal']
  },

  {
  	name: 'Paras',
  	height: 30,
  	types: ['grass', 'bug']
  },

  {
  	name: 'Ledian',
  	height: 140,
  	types: ['bug', 'flying']
  },

  {
  	name: 'Natu',
  	height: 20,
  	types: ['psychic', 'flying']
  },

  {
  	name: 'Numel',
  	height: 70,
  	types: ['fire', 'ground']
  },
]

for (let i = 0; i < pokemonList.length; i++){
	if (pokemonList[i].height > 80) {
		document.write(`<p> ${pokemonList[i].name} (height: ${pokemonList[i].height}") - I am the tallest pokemon! </p>`);
	} else {
		document.write(`<p> ${pokemonList[i].name} (height: ${pokemonList[i].height}")</p>`);
	}
}
