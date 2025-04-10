//walking through playing a disc golf hole with funcitons

//choose disc
function chooseDisc() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve('Disc chosen')
        }, 3000)
    })
}

//throw disc
function throwDisc(outcome) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(outcome === 'Disc chosen') {
                resolve("Nice shot!")
            } else {
                reject("You niced my shot!")
            }
        }, 2000)
    })
}

// walk to your disc
function walkToMyDisc(outcome) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (outcome === "Nice shot!") {
                resolve("Tap in that Putt!")
            } else {
                reject("Nice Lay up")
            }
        }, 2000)
    })
}

chooseDisc()
.then((value) => {
    console.log(value)
    return throwDisc(value)
})
.then((value) => {
    console.log(value)
    return walkToMyDisc(value)
})
.then((value) => console.log(value))
.catch((err) => console.error(err))