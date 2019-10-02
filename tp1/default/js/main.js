window.addEventListener("load", event => {
	console.log("loaded");
	main();
});

const main = event => {

	console.log("MAIN");

//		let component = new MyComponent("canvas");
		myElement = document.createElement("canvas");
		document.body.appendChild(myElement);
		myElement.style.width= "100%";
		myElement.style.height= "100%";

		myElement.style.backgroundColor= "blue";
		console.log("2");
		ctx = myElement.getContext("2d");
		img = new Image();
		img.src = "img/pencil.jpg";
		ctx.drawImage(img,0,0);
		myElement.addEventListener("click", onClick);
	//	document.body.appendChild(img);

}

const onClick = event => {
	console.log("clicked");
	console.log(event.clientX);
	console.log(event.clientY);

	ctx.drawImage(img,event.clientX, event.clientY,100,100,event.clientX, event.clientY,100,100);

//	console.log(MM.randRange(0,5));


}

/*
class MyComponent {

	constructor(name) {
	//	console.log("my name is", name);
	}

}
*/
