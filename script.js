const elements = {
    searchBar: document.getElementById('searchBar'),
    searchBtn: document.getElementById('searchBtn'),
    searchDisplay: document.getElementById('searchDisplay')
}


async function fetchPokemon() {

    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/clefairy/');
        
        if (!response.ok){
            console.log('error fetching data');
        }

        const data = await response.json()
        console.log(data.weight)

    } catch(error) {
        console.error(error);
    }
    
}

fetchPokemon()