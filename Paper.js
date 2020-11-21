class Paper{
    constructor(x,y,diameter){

        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,diameter/2+10,options)

        World.add(world,this.body);

        this.diameter = diameter;
        
        this.image = loadImage("Crumpled Paper.png");

    }

    display(){
        var pos = this.body,position;
        var angle = this.body.angle;

        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        image(this.image,0,0,50,50);
        pop();
    }
}