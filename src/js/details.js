import { detailsPokemon } from "./fetchApi/fetchfunctions.js"

window.onload = async () => {

    console.log("carregou a página de detalhes")

    const urlParam = new URLSearchParams(window.location.search)

    const detailsPokemonURL = urlParam.get("detailsUrl")

    const details = await detailsPokemon(detailsPokemonURL)

    setDetails(details)

}

function setDetails(details){
    const pokemonName = document.getElementById("pokemon-name");
    const pokemonAbilities = document.getElementById("pokemon-ability");

    console.log("details: ", details)

    pokemonName.innerText = details.name

    details.abilities.forEach(({ability: {name}}) => {
         pokemonAbilities.innerHTML += `<p>${name}<p>`
    })

}