async function fun(){
    let delhiWhether = new Promise((res,rej)=> {
        setTimeout( () => {
            res("27 deg");
        },5000);
    })
    let bangaloreWhether = new Promise((res,rej)=> {
        setTimeout( () => {
            res(" 25 deg");
        },10000);
    })

    
    console.log("-------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(("delhi whether fetching"));
    console.log("-------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    let dahli = await delhiWhether;
    console.log(("fetched delhi whther" + dahli));
    console.log("-------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(("bangalor whether fetching"));
    console.log("-------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

    let bang = await bangaloreWhether;
    console.log(("fetched banglore whther" + bang));
    console.log("-------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");


}
console.log("WELCOME TO WHTHER CONTROL ROOOM");
fun()