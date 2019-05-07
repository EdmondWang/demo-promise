let p = new Promise((resolve, reject) => {
    let p2 = new Promise((resolve, reject) => {
        reject('reject p2!');
    });
}).catch((err) => {
    console.log(err);
});