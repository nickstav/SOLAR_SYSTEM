function Star(diameter,mass) {
  this.d = diameter;
  this.m = mass;

  this.show = function() {

  let diamScale = Math.log(this.d);
  noStroke();
  fill(255,255,0);
  ellipse(windowWidth/2, windowHeight/2, diamScale, diamScale);

  }

}
