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
        setTimeout(() => {
            console.log("house is clean")
            resolve()
        }
      , 1000);
     } else {
        reject("You have to clean the house first")
 }
})

//walk the dog
const walkDog = new Promise((resolve, reject) => {
    let dogWalked = true;

    if (dogWalked) {
        setTimeout(() => {
            console.log('dog is walked')
            resolve();
        }
        , 6000)
    } else {
        reject('dog has to be walked')
    }
})

// take out trash
const takeOutTrash = new Promise ((resolve, reject) => {
 let trashTakenOut = true;

    if(trashTakenOut) {
        setTimeout(() => {
            console.log('trash is taken out')
            resolve();
        }, 1000)
        
    } else {
        reject('the trash has not been taken out')
    }
})

cleanHouse
    .then(() => {
        return walkDog
    })
    .then(() => {
        return takeOutTrash
    })
    .then(() => console.log('chores are complete'))
    .catch((error) => console.log(error))
    .finally(() => console.log('you can go play with your friends now'))
//go play with friend 