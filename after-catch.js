let p = new Promise((resolve, reject) => {
    resolve();
})
.then(() => {
    throw new Error();
})
.catch(err => {
    console.log("inside catch");
})
.then(() => {
    console.log("after catch");
})