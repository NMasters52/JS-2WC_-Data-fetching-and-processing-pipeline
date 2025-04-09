// const fetch = new Promise((resolve) => {
//     setTimeout(() => resolve(console.log('hello')), 1000);
// })

// fetch
//     .then(() => console.log("fetch resolved"))
//     .catch(() => console.error(`error: ${error}`))
//     .finally(() => console.log('promise completed'))


// clean the house
const cleanHouse = new Promise((resolve, reject) => {
    let houseCleaned = true;
    
    if (houseCleaned){
        setTimeout(() => resolve(console.log("house is clean")), 1000);
    } else {
        reject(console.log("You have to clean the house first"));
    }
})

//walk the dog

// take out trash

//go play with friend 