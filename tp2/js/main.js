window.addEventListener("load", event => {
    console.log("loaded");
    main();
});

findCircle = (p1, p2, p3) =>{
    console.log("in circle")
    milieuXp1p2 = p1.x + p2.x/2;
    milieuYp1p2 = p1.x + p2.x/2;


}

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

callPointsAndCircle =()=>{
    p1 = new Point(event.clientX,event.clientY);
    p2 = new Point(162, 485);
    p3 = new Point(762, 435);
    //console.log(p1,p2,p3);
    findCircle(p1, p2, p3);
    //let ctx = canvas.getContext("2d");
    //ctx.beginPath();
    //ctx.arc(450,300,210,0, 2* Math.PI);
    //ctx.stroke();
}



const main = event =>{
    console.log("in main");
    canvas = document.createElement("canvas");
    canvas.id ="myCanvas";
    document.body.appendChild(canvas);
    canvas.width = 900;
    canvas.height = 600;

    window.addEventListener("click",callPointsAndCircle);
}
