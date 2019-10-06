window.addEventListener("load", event => {
    console.log("loaded");
    main();
});



convScreenXToPictureX = x =>{
    pictureX = x / parseInt(canvas.style.width) * img.width  ;
    return pictureX;
}

convScreenYToPictureY = y =>{
    pictureY = y / parseInt(canvas.style.height) * img.height  ;
    return pictureY;
}
const onClick = event => {
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

    //    console.log(cx/ parseInt(canvas.style.width));
	//let sx = cx/parseInt(canvas.style.width) * 1920; // source x
	//let sy = cy/parseInt(canvas.style.height) * 1080; // source y
    //console.log(img.width);//1920
    //console.log(img.height);//1080
    //void ctx.drawImage(image, sx, sy, sLargeur, sHauteur, dx, dy, dLargeur, dHauteur);
    ctx.drawImage(img, sx, sy, 100, 100, sx, sy, 100, 100);
    //	console.log(MM.randRange(0,5));
}

const randomSwap= e =>{
    console.log("hello");
}


const main = event => {

    console.log("MAIN");
    canvas = document.createElement("canvas");
    canvas.id ="myCanvas";
    document.body.appendChild(canvas);
    canvas.width = 1920;
    canvas.height = 1080;
    canvas.style.width = "900px";
    canvas.style.height = "600px";

    ctx = canvas.getContext("2d");
    img = new Image();
    img.src = "img/hibou.jpg";
    defaultImage = new Image();
    defaultImage.src = "img/car.jpg";
    defaultImage.onload = ()=>{
        ctx.drawImage(defaultImage, 0 ,0);
    }
    canvas.addEventListener("click", onClick);
    randomSwap();
}
/*
class MyComponent {

	constructor(name) {
	//	console.log("my name is", name);
	}

}
*/
