function Planet(diameter, mass, aphelion, semiMajorAxis, eccentricity, colour) {

  this.d = diameter;
  this.m = mass;
  this.c = colour;
  this.dist = aphelion;
  this.a = semiMajorAxis;
  this.e = eccentricity;

  //scale the planet's diameter in comparison to its neighbours
  this.diamScale = map(this.d, 4000, 150000, 4, 20);

  //scale the planet's orbital parameters logarithmically
  // let sunEdge = Math.log(sunDiameter/4);
  // let distScale = map(Math.log(this.dist), sunEdge, 30, 0, windowWidth/2);
  // this.a_scaled = map(Math.log(this.a), sunEdge, 30, 0, windowWidth/2);

  //the planet's x and y coordinated w.r.t. the sun's centre
  this.pixelOffset = map(Math.log(this.dist), 0, 30, 0, windowWidth/2);
  this.x = windowWidth/2 - this.pixelOffset;
  this.y = windowHeight/2;

  //draw the planet
  this.show = function() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.diamScale, this.diamScale);
  }

  //option to show the path of the planet's orbit
  this.showOrbit = function() {
    for (var theta = 0; theta <= TWO_PI; theta += PI/16) {
      let r = (this.a * (1 - Math.pow(this.e, 2))) / (1 + this.e * cos(theta));
      let rMapped = map(Math.log(r), 0, 30, 0, windowWidth/2);
      stroke(255);
      point(rMapped*cos(theta) + windowWidth/2, rMapped*sin(theta) + windowHeight/2);
    }
  }




}
