window.addEventListener("load", event => {
    console.log("loaded");
    main();
});

findCircle = (p1, p2, p3) =>{
    console.log("in circle")
    let xc =
        ((p3.x**2 - p2.x**2 + p3.y**2 -p2.y**2 ) / (2*(p3.y-p2.y))
            - (p2.x**2 - p1.x**2 + p2.y**2 -p1.y**2) / (2*(p2.y-p1.y)))
        /
        ((p3.x-p2.x)/(p3.y-p2.y)-(p2.x-p1.x)/(p2.y-p1.y))// erreur formule pdf ici corrigee
    console.log("xc = ",xc);

    let yc = (-(p2.x - p1.x) / (p2.y - p1.y) * xc) +
        (p2.x**2 - p1.x**2 + p2.y**2 - p1.y**2) /  (2* (p2.y - p1.y))
    console.log("yc = ",yc);

    let rc = Math.sqrt( (p1.x - xc)**2 + (p1.y - yc)**2);
    console.log("rc = ",rc);
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(xc,yc,rc,0, 2* Math.PI);
    ctx.stroke();


}

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

callPointsAndCircle =()=>{
    //p1 = new Point(event.clientX,event.clientY);
    p1 = new Point(0, 10);
    p2 = new Point(5, -6);
    p3 = new Point(7, 63);
    //console.log(p1,p2,p3);
    findCircle(p1, p2, p3);

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
