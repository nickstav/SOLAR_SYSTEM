// 1 Astronomical Unit = distance from Sun to Earth (m)
const AU = 1.496 * Math.pow(10,11);

const sunDiameter = 1.391 * Math.pow(10,9);
const sunMass = 1.989 * Math.pow(10,33);

//the diameter (km), mass (kg), aphelion, semi-major axis and eccentricity
//of each of the planets and their orbits
const mer = [4879, 3.285 * Math.pow(10,23), 0.467*AU, 0.387*AU, 0.21];
const ven = [12104, 4.867 * Math.pow(10,24), 0.723*AU, 0.723*AU, 0.007];
const ear = [12742, 5.972 * Math.pow(10,24), 1.0167*AU, 1*AU, 0.0167];
const mar = [6779, 6.39 * Math.pow(10,23), 1.524*AU, 1.524*AU, 0.0934];
const jup = [139820, 1.898 * Math.pow(10,27), 5.459*AU, 5.203*AU, 0.049];
const sat = [116460, 5.683 * Math.pow(10,26), 10.07*AU, 9.537*AU, 0.057];
const ura = [50724, 8.681 * Math.pow(10,25), 20.1*AU, 19.191*AU, 0.046];
const nep = [49244, 1.024 * Math.pow(10,26), 30.4*AU, 30.069*AU, 0.011];

//TODO - sort out colour function
var grey = 125;

//TODO - var sunimg = createPattern(sun.jpg,repeat);


function setup() {
	createCanvas(windowWidth, windowHeight - 10);

	sun = new Star(sunDiameter, sunMass);
	mercury = new Planet(mer[0], mer[1], mer[2], mer[3], mer[4], grey);
	venus = new Planet(ven[0], ven[1], ven[2], ven[3], ven[4], grey);
	earth = new Planet(ear[0], ear[1], ear[2], ear[3], ear[4], grey);
	mars = new Planet(mar[0], mar[1], mar[2], mar[3], mar[4], grey);
	jupiter = new Planet(jup[0], jup[1], jup[2], jup[3], jup[4], grey);
	saturn = new Planet(sat[0], sat[1], sat[2], sat[3], sat[4], grey);
	uranus = new Planet(ura[0], ura[1], ura[2], ura[3], ura[4], grey);
	neptune = new Planet(nep[0], nep[1], nep[2], nep[3], nep[4], grey);

	//noLoop();
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

	mercury.showOrbit();
}
