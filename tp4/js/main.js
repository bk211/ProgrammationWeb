window.addEventListener("load", event => {main()});

const get = async url ={
    let result = await fetch(url);
    let response = await result.json();
    return result;
}


const main = async () => {
    console.log("MAIN");

    let result = await fetch('https://ilusio.dev/base/gettest');
    let response = await result.json();
    console.log(result);
    console.log(response);

    let data = {number: 5};
    let send = Object.keys(data).map(key => encodeURIComponent(key) +
    "=" + encodeURIComponent(data[key])).join("&");

    result = await fetch('https://ilusio.dev/base/posttest', {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
        body:send});

    response = await result.json();
    console.log(response);


}
