const planetNames = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
const planets = [];

var slider;
var checkbox;
var minSlider = 0.1;
var maxSlider = 51;
var initVal = 1;

// 1 Astronomical Unit = distance from Sun to Earth (m)
const AU = 1.496 * Math.pow(10,11);

const sunDiameter = 1.391 * Math.pow(10,9);
const sunMass = 1.989 * Math.pow(10,33);

const data = {
    'Mercury': {
      'diameter': 4879, 'mass': 3.285 * Math.pow(10, 23), 'aphelion': 0.467 * AU, 'semiMajorAxis': 0.387 * AU, 'eccentricity': 0.21, 'period': 87.97, 'c1': 170, 'c2': 170, 'c3': 170,
    },
    'Venus': {
      'diameter': 12104, 'mass': 4.867 * Math.pow(10, 24), 'aphelion': 0.723 * AU, 'semiMajorAxis': 0.723 * AU, 'eccentricity': 0.007, 'period': 224.7, 'c1': 204, 'c2': 102, 'c3': 0,
    },
    'Earth': {
      'diameter': 12742, 'mass': 5.972 * Math.pow(10, 24), 'aphelion': 1.0167 * AU, 'semiMajorAxis': 1 * AU, 'eccentricity': 0.0167, 'period': 365.26, 'c1': 17, 'c2': 70, 'c3': 145,
    },
    'Mars': {
      'diameter': 6779, 'mass': 6.39 * Math.pow(10, 23), 'aphelion': 1.524 * AU, 'semiMajorAxis': 1.524 * AU, 'eccentricity': 0.0934, 'period': 686.98, 'c1': 153, 'c2': 51, 'c3': 0,
    },
    'Jupiter': {
      'diameter': 139820, 'mass': 1.898 * Math.pow(10, 27), 'aphelion': 5.459 * AU, 'semiMajorAxis': 5.203 * AU, 'eccentricity': 0.049, 'period': 4322.8, 'c1': 137, 'c2': 102, 'c3': 6,
    },
    'Saturn': {
      'diameter': 116460, 'mass': 5.683 * Math.pow(10, 26), 'aphelion': 10.07 * AU, 'semiMajorAxis': 9.537 * AU, 'eccentricity': 0.057, 'period': 10755.7, 'c1': 237, 'c2': 236, 'c3': 134,
    },
    'Uranus': {
      'diameter': 50724, 'mass': 8.681 * Math.pow(10, 25), 'aphelion': 20.1 * AU, 'semiMajorAxis': 19.191 * AU, 'eccentricity': 0.046, 'period': 30687.15, 'c1': 48, 'c2': 98, 'c3': 174,
    },
    'Neptune': {
      'diameter': 49244, 'mass': 1.024 * Math.pow(10, 26), 'aphelion': 30.4 * AU, 'semiMajorAxis': 30.069 * AU, 'eccentricity': 0.011, 'period': 60190.03, 'c1': 40, 'c2': 95, 'c3': 163,
    },
  }



function setup() {
	createCanvas(windowWidth, windowHeight);
  frameRate(60);

  // create a slider to adjust the speed of the simulation
  slider = createSlider(minSlider, maxSlider, initVal);
  slider.position(10, windowHeight - 28);

  // option to show the planets lined up at their aphelions
  checkbox = createCheckbox('Show aphelions', false);
  checkbox.position(windowWidth - 160, windowHeight - 28);


	sun = new Star(sunDiameter, sunMass);

	planetNames.forEach(planetName => {
		planets.push(new Planet(
			data[planetName].diameter,
			data[planetName].mass,
			data[planetName].aphelion,
			data[planetName].semiMajorAxis,
			data[planetName].eccentricity,
      data[planetName].period,
      data[planetName].c1,
      data[planetName].c2,
      data[planetName].c3,
		));
	})



}

function draw() {
	background(0);

  //create a space for the toolbar
  noStroke();
  fill(255);
  rect(0, windowHeight -30, windowWidth, 30);

   if (slider.value() >= 1){
      fill(0);
      text(round(slider.value()) + 'days/s', 150, windowHeight-15);
     } else {
      fill(0);
      text(round(slider.value() *24) + 'hrs/s', 150, windowHeight-15);
     }

 	sun.show();

	planets.forEach(planet => {
		planet.show();
    planet.angularVelocity = (slider.value()) * TWO_PI / (60 * planet.T);

    if (checkbox.checked() == true){
		planet.showAphelion();
    }

	});

  // display the planet name when the cursor is placed over the planet
  for (var i = 0; i <= 7; i++){
    var r = dist(planets[i].xCoord, planets[i].yCoord, mouseX, mouseY);
    if (r < 20){
      fill(255);
      text(planetNames[i], planets[i].xCoord + 10, planets[i].yCoord + 10);
    }
  }

}
