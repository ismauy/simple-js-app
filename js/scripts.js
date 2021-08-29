let pokemonRepository = (function() {

  let pokemonList = [];
  function loadList() {
    return fetch('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }


  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokes = document.createElement('li');
    let buttonPks = document.createElement('button');
    buttonPks.innerText = pokemon.name;
    buttonPks.classList.add('button-Pokemon');
    listPokes.appendChild(buttonPks);
    pokemonList.appendChild(listPokes);
    buttonPks.addEventListener('click', function(eventClick){
      showDetails(pokemon);
    });
  }

  function loadDetails(pokemon){
    return fetch(pokemon.detailsUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      pokemon.height = json.height;
      pokemon.imageUrl =  json.sprites.front_default;
      console.log(pokemon);
      return json;
    }).catch(function (e) {
      console.error(e);
    })
  }



  function showDetails(pokemon){
    loadDetails(pokemon).then(function (pokemonDetails) {
      console.log(pokemonDetails);
    })
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
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails


  };


})();


pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
