const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var holder;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16;
var polygon,slingshot,pImg;
var score=0;

function preload(){
   pImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    holder= new Ground(400,280,200,20);

    b1 = new Box(300,275,30,40);
    b2 = new Box(330,275,30,40);
    b3 = new Box(360,275,30,40);
    b4 = new Box(390,275,30,40);
    b5 = new Box(420,275,30,40);
    b6 = new Box(450,275,30,40);
    b7 = new Box(480,275,30,40);
    b8 = new Box(330,235,30,40);
    b9 = new Box(360,235,30,40);
    b10 = new Box(390,235,30,40);
    b11 = new Box(420,235,30,40);
    b12 = new Box(450,235,30,40);
    b13 = new Box(360,195,30,40);
    b14 = new Box(390,195,30,40);
    b15 = new Box(420,195,30,40);
    b16 = new Box(390,155,30,40);

    polygon = Bodies.rectangle(50,200,20,20);
    World.add(world,polygon);

    slingshot = new Slingshot(this.polygon,{x:100,y:200});


}

function draw(){
    background("lightblue");
    text("Score:"+score,750,40);
    Engine.update(engine);
    holder.display();
    imageMode(CENTER);
    image(pImg,polygon.position.x,polygon.position.y,40,40);
    slingshot.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();

    b1.Score();
    b2.Score();
    b3.Score();
    b4.Score();
    b5.Score();
    b6.Score();
    b7.Score();
    b8.Score();
    b9.Score();
    b10.Score();
    b11.Score();
    b12.Score();
    b13.Score();
    b14.Score();
    b15.Score();
    b16.Score();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(this.polygon);
    }
}
