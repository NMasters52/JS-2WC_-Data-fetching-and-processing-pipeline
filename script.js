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
        displaySearch(data)

    } catch(error) {
        console.error(error);
    }
}

function displaySearch(fetchResponseData) {
    elements.searchDisplay.innerHTML = `
        <p>${fetchResponseData.weight}</p>`
}


function initializeApp() {
    elements.searchBtn.addEventListener('click', search)
}

initializeApp();