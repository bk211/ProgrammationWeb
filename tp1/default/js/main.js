window.addEventListener("load", event => {
    console.log("loaded");
    main();
});
let numberOfCol = 20;
let numberOfLine = 15;
let imgWidth = 1920 / numberOfCol;
let imgHeight = 1080 / numberOfLine;
let tab = Array(numberOfCol*numberOfLine);
tab.fill(1);

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;


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

const randomSwap= e =>{
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let sx = convScreenXToPictureX(event.clientX);
    let sy = convScreenYToPictureY(event.clientY);

    animationRandom = () =>{
        console.log("start randomSwap");
        let carreChoisit = MM.randRange(0, tab.length);
        while(!tab[carreChoisit]){
            carreChoisit = MM.randRange(0, tab.length);
        }
        tab[carreChoisit]=0;
        console.log(carreChoisit);
        let carreX = (carreChoisit % numberOfCol) * imgWidth;
        let carreY = Math.trunc(carreChoisit / numberOfCol) * imgHeight;
        ctx.drawImage(img, carreX, carreY, imgWidth, imgHeight, carreX, carreY, imgWidth, imgHeight);
        animationId = window.requestAnimationFrame(animationRandom);
        if(!tab.includes(1)){
            console.log("stop randomSwap");
            window.cancelAnimationFrame(animationId);
        }
    }
    animationRandom();

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
    canvas.addEventListener("click", randomSwap);

}

class MyGallery {
	constructor() {
        let srcArray = ["car.jpg","hibou.jpg","tree.jpg"]
        let currentImageIndex = 0;
        let currentImage = new Image();
        currentImage.src = srcArray[currentImageIndex];
        let GallerySize = srcArray.length;
        console.log("MyGallery is set");
	}

    swapImage = () =>{
        currentImageIndex = (currentImageIndex + 1) % GallerySize;
        currentImage.src = srcArray[currentImageIndex];
    }

}
