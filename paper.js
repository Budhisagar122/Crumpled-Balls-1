class paper{
    constructor(x1,y1,r1){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x1,y1,r1,options)
        World.add(world,this.body)
        this.r1=20;
    }
    display(){
        var paperpos=this.body.position;
        push()
        translate(paperpos.x,paperpos.y);
        fill("blue");
        ellipseMode(RADIUS)
        ellipse(0,0,this.r1,this.r1);
        pop()

    }
}