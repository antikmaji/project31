class Particle {
    constructor(x,y) {
      this.body = Bodies.circle(x,y,1);
      this.color = color(random(0, 255), random(0, 255), random(0, 255), {restitution:0.4});
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      noStroke();
      fill(this.color);
      ellipseMode(CENTER);
      ellipse(0,0, 20);
      pop();
    }
  }