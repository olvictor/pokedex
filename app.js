const ul = document.querySelector('[data-js="pokedex"]');


const pokemonApi = () =>{

    for(i=1; i<=151; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`

        fetch(url)
        .then(response => response.json())
        .then(pokemon => {
            const li = document.createElement('li');

            const types = pokemon.types.map(typeInfo => typeInfo.type.name)
            li.className = `card ${types[0]}`
            li.innerHTML = 
            `   
            <h2 class='card-tittle'>${pokemon.id}. ${pokemon.name}</h2>
            <img class='card-image'src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif">
            <p class='card-subtitle'>${pokemon.types.map(typeInfo => typeInfo.type.name).join( ' | ' )}</p>

            `
            
            // https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg
            // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif
            ul.appendChild(li)
            console.log(pokemon)
        })

    }


}

pokemonApi()