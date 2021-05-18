class Launcher{
    constructor(BA,PB){
        var options = {
            bodyA: BA,
            pointB: PB,
            stiffness: 0.08,
            length: 5
        }
        this.pointB=PB;
        this.launcher  = Constraint.create(options);
        World.add(world, this.launcher);

    }
    attach(body){
        this.launcher.bodyA=body
    }
fly(){
    this.launcher.bodyA=null
}
    display(){
        if(this.launcher.bodyA){

            var pointA = this.launcher.bodyA.position;
            strokeWeight(4);
            line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }
}