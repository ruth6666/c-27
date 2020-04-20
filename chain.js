class Chain{
    constructor(bodyA,bodyB){
var options={
    bodyA:bodyA,bodyB:bodyB,length:100,stiffness:0.6
}
this.Chain = Matter.Constraint.create(options)
World.add(world,this.Chain);
    }
    display(){
        strokeWeight(5)
        var pointA = this.Chain.bodyA.position
        var pointB = this. Chain.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}