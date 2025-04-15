const elements = {
    searchBar: document.getElementById('searchBar'),
    searchBtn: document.getElementById('searchBtn'),
    searchDisplay: document.getElementById('searchDisplay')
}

 async function search() {
    const pokemonName = elements.searchBar.value;

    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
        
        if (!response.ok){
            console.log('error fetching data');
        }

        const data = await response.json()
        elements.searchDisplay.innerHTML = `
        <p>${data.weight}</p>`

    } catch(error) {
        console.error(error);
    }
}


// async function fetchPokemon() {

//     try{
//         const response = await fetch('https://pokeapi.co/api/v2/pokemon/clefairy/');
        
//         if (!response.ok){
//             console.log('error fetching data');
//         }

//         const data = await response.json()
//         console.log(data.weight)

//     } catch(error) {
//         console.error(error);
//     }
    
// }

function initializeApp() {
    elements.searchBtn.addEventListener('click', search)
}

initializeApp();