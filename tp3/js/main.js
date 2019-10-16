window.addEventListener("load", event => {
    console.log("loaded");
    main();
});


function sleep(ms){
    let callback, prom = new Promise(resolve => callback, resolve);
    setTimeout(callback, ms);
    return prom;
}

const main = event => {

    console.log("MAIN");
}
