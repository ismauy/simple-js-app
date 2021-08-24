let pokemonRepository = (function() {

    let pokemonList = [{
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

    function addListItem(pokemon){
      let pokemonList = document.querySelector('.pokemon-list');
      let listPokes = document.createElement('li');
      let buttonPks = document.createElement('button');
      buttonPks.innerText = pokemon.name;
      buttonPks.classList.add('button-Pokemon');
      listPokes.appendChild(buttonPks);
      pokemonList.appendChild(listPokes);
      buttonPks.addEventListener('click', function(pokemon1){
        showDetails(pokemon);
      });
    }


    function showDetails(pokemon){
        console.log(pokemon);
    }





    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };


})();



pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
