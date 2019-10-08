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
window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

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
        let carreChoisit = MM.randRange(0, tab.length);
        let i = 0;
        while(!tab[carreChoisit]){
            carreChoisit = MM.randRange(0, tab.length);
            i++;
            if(i>10){ break;}
        }
        tab[carreChoisit]=0;
//        console.log(carreChoisit);
        let carreX = (carreChoisit % numberOfCol) * imgWidth;
        let carreY = Math.trunc(carreChoisit / numberOfCol) * imgHeight;
        ctx.drawImage(img, carreX, carreY, imgWidth, imgHeight, carreX, carreY, imgWidth, imgHeight);
        animationId = window.requestAnimationFrame(animationRandom);
        if(!tab.includes(1)){
            console.log("stop randomSwap");
            window.cancelAnimationFrame(animationId);
            img.src="img/tree.jpg";
            currentAnimation++;
            tab.fill(1);
        }
    }
    if(currentAnimation == 0){
        console.log("start random");
        animationRandom();
    }else if(currentAnimation == 1){
            console.log("start random");
            animationRandom();
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
    defaultImage = new Image();
    img = new Image();
    img.src = "img/hibou.jpg";
    defaultImage.src = "img/car.jpg";
    defaultImage.onload = ()=>{
        ctx.drawImage(defaultImage, 0 ,0);
    }
    currentAnimation = 0;

    canvas.addEventListener("click", randomSwap);

}
