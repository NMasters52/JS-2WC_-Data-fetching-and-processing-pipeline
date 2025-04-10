//walking through playing a disc golf hole with funcitons

//choose disc
function chooseDisc() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('Disc chosen')
        }, 3000)
    })
}

//throw disc
function throwDisc() {
    return new Promise((resolve, reject) => {

        const discIsThrownWell = true;

        setTimeout(() => {
            if(discIsThrownWell) {
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
            if (outcome = "Nice shot!") {
                resolve("Tap in that Putt!")
            } else {
                reject("Nice Lay up")
            }
        }, 2000)
    })
}

//make putt

chooseDisc()
    .then((value) => {
        throwDisc();
        console.log(value)
    })
    .then(function (value) {
        walkToMyDisc(value); 
        console.log(value);
    })
    .catch((error) => console.log(error))
    .finally(() => console.log('finsihed Hole'))