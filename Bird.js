class Bird {
    constructor(x, y) {
      var options = {
          'frictionAir':0.005,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,250,150, options);
      this.width = 250;
      this.height = 150;
      this.image = loadImage("Superhero-02.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("red");
      fill('red');
      
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  