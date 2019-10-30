window.addEventListener("load", event => {
    //console.log("loaded");
    main();
});

users = new Array(500).fill(undefined);


function sleep(ms){
    console.log("sleep",ms);
    let callback, prom = new Promise(resolve => callback =resolve);
    setTimeout(callback, ms);
    return prom;
}

class Person{
    constructor(){
    this.firstName = faker.fake("{{name.firstName}}");
    this.lastName = faker.fake("{{name.lastName}}");
    this.country = faker.fake("{{address.country}}");
    this.age = MM.randRange(0,100);
    this.gender =MM.randRange(0,1);
    }
}


function generateProfiles(){
    users = users.map( item => new Person());
}

async function findUserByAge(age){
    await sleep(500);
    return users.filter(user => user.age> age);
}


// const f = async() = {}
async function main() {
    /*console.log("hello");
    await sleep(500);
    console.log(users);
    console.log("done");*/
    //let foo = users.filter(user => user.age> 50);
    //console.log(foo);
    console.log(await findUserByAge(50));
    console.log("done")
}

generateProfiles();
