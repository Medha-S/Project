
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var treeImg, boyImg;
var stone;
var elasticConstraint;
var mango1,mango2,mango3,mango4,mango5;

function preload()
{
	treeImg = loadImage("tree.png");
	boyImg = loadImage("boy.png");
}

function setup()
{
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(400, 680,800,40);
    stone = new Stone(65,570,25);
    mango1 = new Mango(680,320,40);
    mango2 = new Mango(660,150,40);
    mango3 = new Mango(550,300,40);
    mango4 = new Mango(750,260,40);
    mango5 = new Mango(620,230,40);
    rope = new Rope(stone.body,{x:65,y:570});

	Engine.run(engine);
  
}

function draw() 
{
  rectMode(CENTER);
  background(225);
  Engine.update(engine);

  imageMode(CENTER);
  image(treeImg,660,400,300,700);
  image(boyImg,100,620,100,200);

  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  rope.display();

  drawSprites();
  detectcollission(stone,mango1);
  detectcollission(stone,mango2);
  detectcollission(stone,mango3);
  detectcollission(stone,mango4);
  detectcollission(stone,mango5);
  //collision();
}

function mouseDragged()
{
   Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY});
}

function mouseReleased()
{
   rope.fly();
}

function keyPressed()
{
  if(keyCode === 32)
  {
     rope.attach(stone.body);
  }
}

function detectcollission(lstone,lmango)
{
  var mangoBodyPosition = lmango.body.position;
  var stoneBodyPosition = lstone.body.position;
  
   var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y); 
  if(distance <= lmango.radius + lstone.radius)
  {
     Matter.Body.setStatic(lmango.body,false);
  }
}