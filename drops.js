class Drops {
    constructor(x,y)    {
        this.body = Bodies.rectangle(x,y,width,height);
        this.w = 50;
        this.h = 50;
        this.velocityY = 15;
        this.scale = 0.05;
        World.add(world,this.body);
        this.image = loadImage("raindrop.png");
    }
    display()  {
        var pos =this.body.position;
        rectMode(CENTER);
        
        rect(pos.x, pos.y, this.w,this.h);
    }
}