class Mango
 {
  constructor(x, y, radius) 
  {
    var options = 
    {   
        'isStatic' :true,
        'restitution':0.1,
        'friction':0.5,
        'density':1.2
    }
    this.body = Matter.Bodies.circle(x, y, radius, options);
    this.radius = radius;
    this.image = loadImage("mango.png");
    World.add(world, this.body);
  }
  display()
  {
    var pos =this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.radius, this.radius);
    pop();
  }
}