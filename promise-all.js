Promise.all([
    Promise.resolve('Hello Promise!')
]).then(([greeting]) => {
    console.log(greeting);
});