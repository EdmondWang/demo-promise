let p = new Promise((resolve, reject) => {
        // reject('val');
        cdf.name.length > 0;
    })
    .catch(err => {
        console.log("haha");
    })
    .then(
        () => {
            console.log("success");
        },
        () => {
            console.log("fail");
        }
    );