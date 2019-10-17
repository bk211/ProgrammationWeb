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
    await sleep(50);
    console.log("start filtering")
    return users.filter(user => user.age> age);
}


// const f = async() = {}
async function main() {
    console.log("hello");
    console.log(users);
    console.log("done");
    //console.log(findUserByAge(users, 0));
}

generateProfiles();
