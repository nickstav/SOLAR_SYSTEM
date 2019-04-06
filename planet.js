function Planet(diameter, mass, aphelion, colour) {

  this.d = diameter;
  this.m = mass;
  this.c = colour;
  this.dist = aphelion;

  this.show = function() {

  //scale the planet's diameter in comparison to its neighbours
  let diamScale = map(this.d, 4000, 150000, 4, 20);

  //scale the planet's distance from the sun logarithmically
  let sunEdge = Math.log(sunDiameter/4);
  let distScale = map(Math.log(this.dist), sunEdge, 30, 0, windowWidth/2);
  noStroke();
  fill(this.c);
  ellipse(windowWidth/2 + distScale, windowHeight/2, diamScale, diamScale);

  }

this.move = function(){



}

}
