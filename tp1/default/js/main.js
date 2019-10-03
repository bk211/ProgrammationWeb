window.addEventListener("load", event => {
	console.log("loaded");
	main();
});

const main = event => {

	console.log("MAIN");

//		let component = new MyComponent("canvas");
		canvas = document.createElement("canvas");
		document.body.appendChild(canvas);
		canvas.width= 1920;
		canvas.height= 1080;

		canvas.style.width= "900px";
		canvas.style.height= "600px";

		canvas.style.backgroundColor= "blue";
		ctx = canvas.getContext("2d");
		img = new Image();
		img.src = "img/hibou.jpg";
		img.style.width = "900px";
		img.style.height = "600px";
		document.body.appendChild(img);
		canvas.addEventListener("click", onClick);

}

const onClick = event => {
	console.log("clicked");
	let cx = window.innerHeight;
	let cy = window.innerWidth;
	//console.log(canvas.width); // 1920
	//console.log(canvas.height); // 1080

	console.log(cx);
	console.log(cy);
	console.log(event.clientX);
	console.log(event.clientY);

	ctx.drawImage(img,0,0, 1900, 1080, 0,0,canvas.width,canvas.height);

//	console.log(MM.randRange(0,5));


}

/*
class MyComponent {

	constructor(name) {
	//	console.log("my name is", name);
	}

}
*/
