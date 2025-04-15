//container for all dom elements
const elements = {
    searchBar: document.getElementById('searchBar'),
    searchBtn: document.getElementById('searchBtn'),
    searchDisplay: document.getElementById('searchDisplay')
}

//function to grab the users search name, fetch the data, and then display it 
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

//helper function to display fetch responses data
function displaySearch(fetchResponseData) {
    elements.searchDisplay.innerHTML = `
        <p>${fetchResponseData.weight}</p>`
}

//ran when the app mounts so the event listner is live and the page is fully loaded
function initializeApp() {
    elements.searchBtn.addEventListener('click', search)
}

initializeApp();