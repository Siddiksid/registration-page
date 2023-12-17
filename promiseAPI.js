let p1 = new Promise( (res,rej) => {
    setTimeout( () => {
        res("PROMISE ONE IN ONE SECOND");
    },1000);
});

let p2 = new Promise( (res,rej) => {
    setTimeout( () => {
        res("PROMISE TWO IN TWO SECOND");
    },2000);
})

let p3 = new Promise( (res,rej) => {
    setTimeout( ()=> {
        res("PROMISE THREE IN THREE SECOND");
    },3000)
})
// if error comes this will give error .to avoid this we can use Settled api
Promise.all([p1,p2,p3]).then( (val)=> {
    console.log(val);
    
})
// this will  answer as an array wheather its error or resolve.
Promise.allSettled([p1,p2,p3]).then( (val)=> {
    console.log(val);
    
})
//  which one will execute first that will be the output
//  in this ex p1 is having a time  1 sec so it will be the output
//  if error comes it will give error
Promise.race([p1,p2,p3]).then( (val)=> {
    console.log(val);
    
})
// if error occurs ,then this will goes to next and print that- wprks as race only
Promise.race([p1,p2,p3]).then( (val)=> {
    console.log(val);
    
})
Promise.resolve([p1,p2,p3]).then( (val)=> {
    console.log(val);
})
Promise.reject([p1,p2,p3]).then( (val)=> {
    console.log(val);  
})