const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygonImg;
var holder, ball, ground;
var stand1, stand2;
var slingShot;


function preload(){
    polygonImg = loadImage("polygon.png")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(490,300,250,10)
  stand2 = new Stand(800,200,200,10)

  //level one
  block1 = new Block(400,275,30,40)
  block2 = new Block(430,275,30,40)
  block3 = new Block(460,275,30,40)
  block4 = new Block(490,275,30,40)
  block5 = new Block(520,275,30,40)
  block6 = new Block(550,275,30,40)
  block7 = new Block(580,275,30,40)
  //level two
  block8 = new Block(430,235,30,40)
  block9 = new Block(460,235,30,40)
  block10 = new Block(490,235,30,40)
  block11 = new Block(520,235,30,40)
  block12 = new Block(550,235,30,40)
  //level 3
  block13 = new Block(460,195,30,40)
  block14 = new Block(490,195,30,40)
  block15 = new Block(520,195,30,40)
  //level 4
  block16 = new Block(490,155,30,40)


  //2nd pyramid
  blocks1 = new Block(740,175,30,40)
  blocks2 = new Block(770,175,30,40)
  blocks3 = new Block(800,175,30,40)
  blocks4 = new Block(830,175,30,40)
  blocks5 = new Block(860,175,30,40)
  //level 2
  blocks6 = new Block(770,135,30,40)
  blocks7 = new Block(800,135,30,40)
  blocks8 = new Block(830,135,30,40)
  //level 3
  blocks9 = new Block(800,95,30,40)

  ball = Bodies.circle(50,200,20)
  World.add(world, ball)

  slingShot = new Slingshot(ball, {x: 100, y: 200})
}
function draw() {
    background(56,44,44)
    ground.display()
    stand1.display()
    stand2.display()
    strokeWeight(2);
    stroke(15);
    fill("orange");
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    fill("yellow")
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    fill("green")
    block13.display()
    block14.display()
    block15.display()
    fill("cyan")
    block16.display()

    fill("skyblue");
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    fill("turquoise");
    blocks6.display();
    blocks7.display();
    blocks8.display();
    fill("pink")
    blocks9.display();
    fill("gold");
    imageMode(CENTER)
    image(polygonImg, ball.position.x, ball.position.y, 40, 40)

    slingShot.display()
}
function mouseDragged(){
    Matter.Body.setPosition(ball, {x:mouseX, y:mouseY})
}
function mouseReleased(){
    slingShot.fly()
}
function keyPressed(){
    if(keyCode == 32){
        slingShot.attach(this.ball)
    }
}