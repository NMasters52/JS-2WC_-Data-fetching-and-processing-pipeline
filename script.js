fetch('https://pokeapi.co/api/v2/pokemon/clefairy/')
.then(response => response.json())
.then (data => console.log(data.types))
.catch(error => console.log(error))