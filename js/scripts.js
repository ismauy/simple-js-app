
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

document.write('<ul>');
for (let i = 0; i < pokemonList.length; i++) {
  let currentPokemon = pokemonList[i];

  document.write(`
    <li>
      ${currentPokemon.name} (height: <span>${currentPokemon.height}</span>)
  `);
  if (currentPokemon.height > 70) {
    document.write(' - I am the tallest pokemon!');
  }
  document.write('</li>');
}
document.write('</ul>');
