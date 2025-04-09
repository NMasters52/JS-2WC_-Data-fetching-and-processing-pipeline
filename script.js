const fetch = new Promise((resolve) => {
    setTimeout(() => resolve(console.log('hello')), 1000);
})

fetch
    .then(() => console.log("fetch resolved"))
    .catch(() => console.error(`error: ${error}`))
    .finally(() => console.log('promise completed'))