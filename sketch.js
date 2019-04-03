const AU = 1.496 * Math.pow(10,11);

const sunDiameter = 1.391 * Math.pow(10,9);
const sunMass = 1.989 * Math.pow(10,33);

//the diameter (km), mass (kg) and aphelion of each of the planets
const mer = [4879, 3.285 * Math.pow(10,23), 0.467*AU];
const ven = [12104, 4.867 * Math.pow(10,24), 0.723*AU];
const ear = [12742, 5.972 * Math.pow(10,24), 1.0167*AU];
const mar = [6779, 6.39 * Math.pow(10,23), 1.524*AU];
const jup = [139820, 1.898 * Math.pow(10,27), 5.459*AU];
const sat = [116460, 5.683 * Math.pow(10,26), 10.07*AU];
const ura = [50724, 8.681 * Math.pow(10,25), 20.1*AU];
const nep = [49244, 1.024 * Math.pow(10,26), 30.4*AU];

var grey = 125;


function setup() {
	createCanvas(windowWidth, windowHeight - 10);

	sun = new Star(sunDiameter, sunMass);
	mercury = new Planet(mer[0], mer[1], mer[2], grey);
	venus = new Planet(ven[0], ven[1], ven[2], grey);
	earth = new Planet(ear[0], ear[1], ear[2], grey);
	mars = new Planet(mar[0], mar[1], mar[2], grey);
	jupiter = new Planet(jup[0], jup[1], jup[2], grey);
	saturn = new Planet(sat[0], sat[1], sat[2], grey);
	uranus = new Planet(ura[0], ura[1], ura[2], grey);
	neptune = new Planet(nep[0], nep[1], nep[2], grey);



}

function draw() {
	background(0);

 	sun.show();
	mercury.show();
	venus.show();
	earth.show();
	mars.show();
	jupiter.show();
	saturn.show();
	uranus.show();
	neptune.show();
}
