class Rope
{
    constructor(a, b)
    {
        var options = 
        {
            bodyA: a,
            pointB: b,
            stiffness: 0.04,
            length: 10
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        this.pointB = b;
    }

    fly()
   {
    this.rope.bodyA = null;
   }

   attach(body)
   {
       this.rope.bodyA=body;
   }
    display()
    {  
       if(this.rope.bodyA)
       {
        var a = this.rope.bodyA.position;
        var b = this.pointB;
        strokeWeight(2);
        line(a.x, a.y, b.x, b.y);
       }
    }
    
}