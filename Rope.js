class SlingShotMe{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        this.pointB=pointB;
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }
     fly(){
     this.Sling.bodyA=null;    
     }
    display(){
     if(this.Sling.bodyA){
        var pointA = this.Sling.bodyA.position;
        var pointB = this.pointB;
        stroke(255)
        strokeWeight(0);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }   }  
    
}