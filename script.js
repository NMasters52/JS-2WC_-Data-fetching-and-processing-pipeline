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

async function playHole() {
    let player = true;

    if (player) {
        try {
            let discThrown = await chooseDisc();
            let walkToDisc = await throwDisc(discThrown);
            let finishHole = await walkToMyDisc(walkToDisc)
            let finished = console.log(finishHole);
            return finished;
        } catch (error){
            console.log(error);
        }
    }
}

playHole();