function Planet(diameter, mass, aphelion, colour) {

  this.d = diameter * Math.pow(10,3);
  this.m = mass;
  this.c = colour;
  this.dist = aphelion;

  this.show = function() {

  let diamScale = Math.log(this.d) / 5;
  let sunEdge = Math.log(sunDiameter/2);
  let distScale = map(Math.log(this.dist), sunEdge, 30, 0, windowWidth/2);
  noStroke();
  fill(this.c);
  ellipse(windowWidth/2 + distScale, windowHeight/2, diamScale, diamScale);

  }

this.move = function(){



}

}
