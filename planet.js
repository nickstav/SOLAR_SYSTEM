function Planet(diameter, mass, aphelion, semiMajorAxis, eccentricity, period, colour) {

  this.d = diameter;
  this.m = mass;
  this.c = colour;
  this.dist = aphelion;
  this.a = semiMajorAxis;
  this.e = eccentricity;
  this.T = period;
  this.theta = random(0, TWO_PI);;

  this.angularVelocity = TWO_PI / (this.T);

  //scale the planet's diameter in comparison to its neighbours
  this.diamScale = map(this.d, 4000, 150000, 4, 20);

  //a function to scale solar distances logarithmically
  this.returnLoggedDistance = function(value){
    return map(Math.log(value), 21, 30, 0, windowHeight/2);
  }

  //the planet's x and y coordinated w.r.t. the sun's centre
  this.pixelOffset = this.returnLoggedDistance(this.dist);
  this.x = windowWidth/2 - this.pixelOffset;
  this.y = windowHeight/2;

  //draw the planet
  this.showAphelion = function() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.diamScale, this.diamScale);
  }

  //option to show the path of the planet's orbit
  this.show = function() {
      this.oldTheta = this.theta;
      this.theta = this.oldTheta + this.angularVelocity;
      let r = (this.a * (1 - Math.pow(this.e, 2))) / (1 + this.e * cos(this.theta));
      let rMapped = this.returnLoggedDistance(r);
      noStroke();
      fill(this.c);
      ellipse(rMapped*cos(this.theta) + windowWidth/2, rMapped*sin(this.theta) + windowHeight/2, this.diamScale, this.diamScale);
  }

}
