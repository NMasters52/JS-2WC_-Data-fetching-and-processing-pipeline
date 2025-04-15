async function fetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/clefairy/');
    const data = await response.json()
    console.log(data.weight)
}