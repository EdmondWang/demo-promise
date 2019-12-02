let p = new Promise((resolve, reject) => {
        resolve();
    })
    .then(() => {
        setTimeout(() => {
            throw new Error();
        });
    })
    .catch(err => {
        console.log("inside catch");
    });