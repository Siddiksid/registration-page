console.log("Person One : Shows The Ticket");
console.log("Person Two : Shows The Ticket");
console.log("Person Four : Shows The Ticket");
console.log("Person Five : Shows The Ticket");

const walkInTheTrain = async () => {
    const BringTheTicks = new Promise( (res,rej ) => {
        setTimeout( () => res("Tickets"), 1000);
    })
    const getPopcorn = new Promise( (res,rej) =>  res("Popcorn"));
    const getButter = new Promise( (res,rej) => res("Butter"));
    const getColdDrinks = new Promise( (res,rej) => res("ColdDrinks"));

    let Ticket = await BringTheTicks;
    console.log("Wife Reached here and says --------------->>>>>>>>>>>>>");
    console.log("Wife: I have tickets");
    console.log("Husband: Let's Go In");
    console.log("Wife: No,I am Hungry");

    let Popcorn = await getPopcorn;
    console.log("Husband: I got "+Popcorn);
    console.log("Husband: Let's Go In Now");
    console.log("Wife: No,I need butter for it");

    let butter = await getButter;
    console.log("Husband: I got " + butter + " too");
    console.log("Husband: Let's Go In now");
    console.log("Wife: No,I need coldDrinks also.Go and bring it too");

    let coldDrinks = await getColdDrinks;
    console.log("Husband: I got " + coldDrinks + " too");
    console.log("Husband: Let's Go In,pleasee....");
    console.log("Wife: yes,we should go in.its too late");
    console.log("Husband: Thanks For reminder darlingg.");

    return Ticket
}

walkInTheTrain().then( (t) => console.log("Person Third: Shows the " + t )); 
