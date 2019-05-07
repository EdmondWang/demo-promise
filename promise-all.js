Promise.all([
    Promise.resolve('Hello Promise!'),
    Promise.resolve('resolved')
]).then(([greeting]) => {
    console.log(greeting);
});