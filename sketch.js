const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var sherlock, backp, back
var mart
var ruby


function setup() {
  createCanvas(800,400);

  backp=loadImage("back.jpeg")
  engine = Engine.create();
	world = engine.world;

  sherlock=new Sherlock(100, 320);
  mart=new Mart(100, 100)
  ruby=new Ruby(400, 360)
  back=createSprite(400, 200, 40, 40);




  back.addImage(backp)
	Engine.run(engine);


}

function draw() {
  background(255, 100, 30); 


  drawSprites();
  sherlock.x=mouseX
  sherlock.y=mouseY


  sherlock.display();
  mart.display();
  ruby.display();
}