function Planet(diameter, mass, aphelion, semiMajorAxis, eccentricity, period, c1, c2, c3) {

  this.d = diameter;
  this.m = mass;
  this.c = color(c1,c2,c3);
  this.dist = aphelion;
  this.a = semiMajorAxis;
  this.e = eccentricity;
  this.T = period;
  this.theta = random(0, TWO_PI);

  //frame rate = 60fps, so calculation required to find ang vel
  this.angularVelocity = (slider.value()) * TWO_PI / (60 * this.T);

  //scale the planet's diameter in comparison to its neighbours
  this.diamScale = map(this.d, 4000, 150000, 4, 20);

  //a function to scale solar distances logarithmically
  this.returnLoggedDistance = function(value){
    return map(Math.log(value), 21, 30, 0, windowHeight/2);
  }

  //the planet's aphelion's x and y coordinated w.r.t. the sun's centre
  this.pixelOffset = this.returnLoggedDistance(this.dist);
  this.x = windowWidth/2 - this.pixelOffset;
  this.y = windowHeight/2;

  //draw the planet at it's furthest point from the Sun
  this.showAphelion = function() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.diamScale, this.diamScale);
  }

  //show the path of the planet's orbit
  this.show = function() {
      this.oldTheta = this.theta;
      this.theta = this.oldTheta + this.angularVelocity;
      let r = (this.a * (1 - Math.pow(this.e, 2))) / (1 + this.e * cos(this.theta));
      this.rMapped = this.returnLoggedDistance(r);
      this.xCoord = this.rMapped*cos(this.theta) + windowWidth/2;
      this.yCoord = this.rMapped*sin(this.theta) + windowHeight/2;
      noStroke();
      fill(this.c);
      ellipse(this.xCoord, this.yCoord, this.diamScale, this.diamScale);
      }
  }
