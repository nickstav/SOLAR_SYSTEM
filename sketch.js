const planetNames = ['mer', 'ven', 'ear', 'mar', 'jup', 'sat', 'ura', 'nep'];
const planets = [];

// 1 Astronomical Unit = distance from Sun to Earth (m)
const AU = 1.496 * Math.pow(10,11);

const sunDiameter = 1.391 * Math.pow(10,9);
const sunMass = 1.989 * Math.pow(10,33);

const data = {
    'mer': {
      'diameter': 4879, 'mass': 3.285 * Math.pow(10, 23), 'aphelion': 0.467 * AU, 'semiMajorAxis': 0.387 * AU, 'eccentricity': 0.21, 'period': 87.97,
    },
    'ven': {
      'diameter': 12104, 'mass': 4.867 * Math.pow(10, 24), 'aphelion': 0.723 * AU, 'semiMajorAxis': 0.723 * AU, 'eccentricity': 0.007, 'period': 224.7,
    },
    'ear': {
      'diameter': 12742, 'mass': 5.972 * Math.pow(10, 24), 'aphelion': 1.0167 * AU, 'semiMajorAxis': 1 * AU, 'eccentricity': 0.0167, 'period': 365.26,
    },
    'mar': {
      'diameter': 6779, 'mass': 6.39 * Math.pow(10, 23), 'aphelion': 1.524 * AU, 'semiMajorAxis': 1.524 * AU, 'eccentricity': 0.0934, 'period': 686.98,
    },
    'jup': {
      'diameter': 139820, 'mass': 1.898 * Math.pow(10, 27), 'aphelion': 5.459 * AU, 'semiMajorAxis': 5.203 * AU, 'eccentricity': 0.049, 'period': 4322.8,
    },
    'sat': {
      'diameter': 116460, 'mass': 5.683 * Math.pow(10, 26), 'aphelion': 10.07 * AU, 'semiMajorAxis': 9.537 * AU, 'eccentricity': 0.057, 'period': 10755.7,
    },
    'ura': {
      'diameter': 50724, 'mass': 8.681 * Math.pow(10, 25), 'aphelion': 20.1 * AU, 'semiMajorAxis': 19.191 * AU, 'eccentricity': 0.046, 'period': 30687.15,
    },
    'nep': {
      'diameter': 49244, 'mass': 1.024 * Math.pow(10, 26), 'aphelion': 30.4 * AU, 'semiMajorAxis': 30.069 * AU, 'eccentricity': 0.011, 'period': 60190.03,
    },
  };

//TODO - sort out colour function
//TODO - var sunimg = createPattern(sun.jpg,repeat);
var grey = 125;


function setup() {
	createCanvas(windowWidth, windowHeight - 10);

	sun = new Star(sunDiameter, sunMass);

	planetNames.forEach(planetName => {
		planets.push(new Planet(
			data[planetName].diameter,
			data[planetName].mass,
			data[planetName].aphelion,
			data[planetName].semiMajorAxis,
			data[planetName].eccentricity,
      data[planetName].period,
			grey
		));
	})

}

function draw() {
	background(0);

 	sun.show();

	planets.forEach(planet => {
		planet.show();
		//planet.showAphelion();
	});

}
