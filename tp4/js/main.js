window.addEventListener("load", event => {main()});

const main = async () => {
    console.log("MAIN");
    let result = await fetch('https://ilusio.dev/base/gettest');
    let response = await result.json();

    console.log(result);
    console.log(response);
}
