window.addEventListener("load", event => {
    console.log("loaded");
    main();
});
let numberOfCol = 20;
let numberOfLine = 15;
let imgWidth = 1920 / numberOfCol;
let imgHeight = 1080 / numberOfLine;
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
let tab = range(0,numberOfCol*numberOfLine-1,1);


console.log("array init");
console.log(tab);

NearestX = x =>{//retourne la position x du cadre le plus proche
    return Math.trunc(x / imgWidth)*imgWidth;
}
NearestY = y =>{//retourne la position y du cadre le plus proche
    return Math.trunc(y / imgHeight)*imgHeight;
}


convScreenXToPictureX = x =>{
    let canvas = document.getElementById("myCanvas");
    pictureX = x / parseInt(canvas.style.width) * img.width  ;
    return pictureX;
}

convScreenYToPictureY = y =>{
    let canvas = document.getElementById("myCanvas");
    pictureY = y / parseInt(canvas.style.height) * img.height  ;
    return pictureY;
}
const onClick = event => {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    console.log("clicked");
    //let iH = window.innerHeight;
    //let iW = window.innerWidth;
    //console.log(canvas.width); // 1920
    //console.log(canvas.height); // 1080
    let cx = event.clientX; //entre 0 et canvas.style.width
    let cy = event.clientY; //entre 0 et canvas.style.height
    console.log("cx = "+cx);
    console.log("cy = "+ cy);
    let sx = convScreenXToPictureX(cx);
    let sy = convScreenYToPictureY(cy);

    console.log(convScreenXToPictureX(cx))
    console.log(convScreenYToPictureY(cy))
    //console.log(img.width);//1920
    //console.log(img.height);//1080
    //void ctx.drawImage(image, sx, sy, sLargeur, sHauteur, dx, dy, dLargeur, dHauteur);
    ctx.drawImage(img, sx, sy, 100, 100, sx, sy, 100, 100);
    //	console.log(MM.randRange(0,5));
}


const randomSwap= e =>{
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let sx = convScreenXToPictureX(event.clientX);
    let sy = convScreenYToPictureY(event.clientY);

    animationRandom = () =>{
        console.log("start randomSwap");
        let carreChoisit = MM.randRange(0, tab.length);
        tab.splice(carreChoisit,1);
        console.log(carreChoisit);
        let carreX = (carreChoisit % numberOfCol) * imgWidth;
        let carreY = Math.trunc(carreChoisit / numberOfCol) * imgHeight;
        ctx.drawImage(img, carreX, carreY, imgWidth, imgHeight, carreX, carreY, imgWidth, imgHeight);
        

    }

}



const main = event => {

    console.log("MAIN");
    let canvas = document.createElement("canvas");
    canvas.id ="myCanvas";
    document.body.appendChild(canvas);
    canvas.width = 1920;
    canvas.height = 1080;
    canvas.style.width = "900px";
    canvas.style.height = "600px";

    let ctx = canvas.getContext("2d");
    img = new Image();
    img.src = "img/hibou.jpg";
    defaultImage = new Image();
    defaultImage.src = "img/car.jpg";
    defaultImage.onload = ()=>{
        ctx.drawImage(defaultImage, 0 ,0);
    }
//    canvas.addEventListener("click", onClick);
    canvas.addEventListener("click", randomSwap);
}
/*
class MyComponent {

	constructor(name) {
	//	console.log("my name is", name);
	}

}
*/
