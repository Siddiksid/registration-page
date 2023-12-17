console.log("LET'S CREATE POSTCREATE AND DELETEPOST PROMISE IN ASYNC AWAIT");
const posts = [];
const promise = async () => {
    const createPost = new Promise( (res,rej) => {
        setTimeout( () => {
            posts.push("POST ONE");
            res(posts[posts.length-1]);
        },3000)
    })
    const deletePost = new Promise( (res,rej) => {
        setTimeout( () => {
            let deletedPost = posts.pop();
            res(deletedPost);
        },4000);
    })
    const createPostTwo = new Promise( (res,rej) => {
        setTimeout( () => {
            posts.push("POST TWO");
            res(posts[posts.length-1]);
        },3000)
    })
    // let addPost = await Promise.all([createPost,deletePost,createPostTwo]);
    return await Promise.all([createPost,deletePost,createPostTwo]);
}
promise().then( (data) => {
    console.log(data);
})
