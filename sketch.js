const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	boximage = loadImage('box.png');
}

function setup() {
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	box1 = new Dustbin(1100,495,150,15);
	box2 = new Dustbin(1185,420,15,170);
	box3 = new Dustbin(1015,420,15,170);
	
	ground = new Ground(700,550,1400,30);
	
	paper = new Paper(200,300);
	
	 Engine.run(engine);

}

function draw() {
	background(206,237,227);
	Engine.update(engine);
	
	paper.display();
	box3.display();
	box1.display();
	box2.display();
	image(boximage,1000,330,200,200);
	ground.display();

}

function keyPressed()	{
	if(keyCode===UP_ARROW)	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-110});
	}
}
