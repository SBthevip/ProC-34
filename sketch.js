const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
function preload() { 
    bg = loadImage("Bg.png"); }

function setup(){
    var canvas = createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,100,70,70);
    box2 = new Box(600,100,70,70);
    box3 = new Box(600,100,70,70);
    box4 = new Box(600,100,70,70);
    box5 = new Box(600,100,70,70);
    box6 = new Box(600,100,70,70);
    box7 = new Box(800,100,70,70);
    box9 = new Box(800,100,70,70);
    box8 = new Box(800,100,70,70);
    box10 = new Box(800,100,70,70);
    box11 = new Box(800,100,70,70);
    box12= new Box(800,100,70,70);
    box13= new Box(700,100,70,70);
    box14= new Box(700,100,70,70);
    box15= new Box(700,100,70,70);
    box16= new Box(700,100,70,70);
    box17= new Box(700,100,70,70);
    box18= new Box(700,100,70,70);
    ground = new Ground(600,500,1200,20);
    bird = new Bird(200,200);
    rope = new SlingShotMe(bird.body,{x:500,y:50});
    monster = new Monster(900,100)
}

function draw(){

    background(bg);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    ground.display();
    bird.display();
    rope.display();
    monster.display();
}

function mouseDragged() {
    Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY });
  }