const fetch = new Promise((resolve) => {
    setTimeout(() => resolve(console.log('hello')), 1000);
})

fetch
    .then(console.log("fetch resolved"))
    .catch(console.error("fetch was unsuccesful"))