let pokemonRepository = (function() {

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

      function add(pokemon) {
        pokemonList.push(pokemon);
      	}

      function getAll () {
      	return pokemonList;
      	}

      return {
      	add: add,
      	getAll: getAll,
      	};
      }) ();


    document.write('<ul>');
    pokemonRepository.getAll().forEach(function(pokes) {

      document.write(`
        <li> ${pokes.name} (height: <span>${pokes.height}</span>)
        `);
        if (pokes.height > 70) {
          document.write(' - I am the tallest pokemon!');
        }
        document.write('</li>');
      })
      document.write('</ul>');
