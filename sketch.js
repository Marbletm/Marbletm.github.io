var rutger = [null];

let x = 740;
let y = 896;

let inst = x / 10;
let name;
let pic = 1;
let test = 1;

function setup() {
  createCanvas(windowWidth, y);
	
	
	for(i = 0; i < 5; i++ ) {
	print(i);
	rutger[i] = loadImage("alternative_rut/rut" + i + ".jpeg");
		
	}

	rutger[5] = loadImage("alternative_rut/rut0.jpeg");

}

function selectPicture(num) {
	
	if(num > 5) {
		
		num = num - 6;
		
		if(num > 5) num = selectPicture(num);
		
	} else { num -= 1; }
	
	if(num <= 0) { num = 5; } 
	
	return num;
}



function draw() {
  background("#fcc2ff");
	
	//Geeft de x positie van de muis.
	pic = mouseX / inst;
	pic = pic.toFixed(0);
	
	//Geeft het nodige plaatje.
	let pick = selectPicture(pic);
	
	image(rutger[pick], windowWidth / 2 - x / 2, 0, x, y);
	
}

function windowResized() {
  resizeCanvas(windowWidth, y);
}
