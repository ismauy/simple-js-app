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
    let pokemonList = document.querySelector('#pokemon-list');
    let listPokes = document.createElement('li');
    listPokes.classList.add('list-group-item');
    let buttonPks = document.createElement('button');
    buttonPks.innerText = pokemon.name;
    buttonPks.classList.add('btn');
    buttonPks.classList.add('btn-warning');
    buttonPks.classList.add('btn-size');
    buttonPks.setAttribute('data-toggle','modal');
    buttonPks.setAttribute('data-target','#modal-container');
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
      pokemon.imageUrl = json.sprites.front_default;
      return json;
    }).catch(function (e) {
      console.error(e);
    })
  }

  function showDetails(pokemon){
    loadDetails(pokemon).then(function (pokemonDetails) {

      let modalContainer = document.querySelector('#modal-container');

      modalContainer.innerHTML = '';
      let modalDialog = document.createElement('div');
      modalDialog.classList.add('modal-dialog');
      let modalContent = document.createElement('div');
      modalContent.classList.add('modal-content');
      let modalHeader = document.createElement('div');
      modalHeader.classList.add('modal-header');
      let modalBody = document.createElement('div');
      modalBody.classList.add('modal-body');
      let modalFooter = document.createElement('div');
      modalFooter.classList.add('modal-footer');

      /* Modal closing */
      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('close');
      closeButtonElement.setAttribute('data-dismiss','modal');
      let spanClose = document.createElement('span');
      spanClose.innerText = 'x';
      closeButtonElement.appendChild(spanClose);

      /* Modal content */
      let pkName = document.createElement('h1');
      pkName.innerText = pokemon.name;

      let pkHeight = document.createElement('p');
      pkHeight.innerText = 'Height = ' + pokemon.height;

      let pkImg = document.createElement('img');
      pkImg.src = pokemon.imageUrl;

      modalHeader.appendChild(pkName);
      modalHeader.appendChild(closeButtonElement);
      modalBody.appendChild(pkImg);
      modalFooter.appendChild(pkHeight);
      modalDialog.appendChild(modalContent);
      modalContainer.appendChild(modalDialog);
      modalContent.appendChild(modalHeader);
      modalContent.appendChild(modalBody);
      modalContent.appendChild(modalFooter);

    })
  }

  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }


  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  /* Modal closing  with Escape key */

  window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  /* Modal closing by clicking outside the Modal*/
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });



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
