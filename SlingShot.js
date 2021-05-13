class SlingShot{
    constructor(bodyA,pointB){
        var option= {
            bodyA : bodyA,
            pointB:  pointB,
            length:10,
            stiffness:0.04
        }
        this. pointB=pointB
        this.sling=Constraint.create(option)
        World.add (world,this.sling)
     }

     fly(){
         this.sling.bodyA=null
     }
    display(){
    if(this.sling.bodyA){
        var posA = this.sling.bodyA.position
        var posB = this.pointB
        
        line(posA.x,posA.y,posB.x,posB.y )
    }
        

    }
} 