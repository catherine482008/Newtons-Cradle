
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;
RoofObject=new roof(350,200,500,50)

bobObject1=new bob(200,600,80)
bobObject2=new bob(280,600,80)
bobObject3=new bob(360,600,80)
bobObject4=new bob(440,600,80)
bobObject5=new bob(520,600,80)

rope1=new rope(bobObject1.body,RoofObject.body,-bobDiameter*2,0)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  bobObject1.display();
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  RoofObject.display();
  roof1.display()
  drawSprites();
 
}



