const Engine = Matter.Engine;                                                   
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var raindrops = [];

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
}
function draw() {
  background(230,50,50);
  Engine.update(engine);

  if(frameCount % 60 === 0) {
    raindrops.push(new Drops(random(20,380),5));
  }

  for(var i = 0;i<raindrops.length;i++) {
    raindrops[i].display();
  }
  drawSprites();
}
