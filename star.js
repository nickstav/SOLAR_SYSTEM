function Star(diameter,mass) {
  this.d = diameter;
  this.m = mass;

  this.show = function() {

  //scale the size of the sun down to a displayable level (w.r.t. the planets)
  let diamScale = map(this.d, 4000, 1500000000, 4, 50);

  noStroke();
  fill(255,255,0);
  ellipse(windowWidth/2, windowHeight/2, diamScale, diamScale);

  }

}
