const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true

  }
  var balloptions = {
    restitution : 1.5,
    speed : 2,
  }
  ground = Bodies.rectangle(200,390,400,20, options);
  World.add(world, ground);

  ball = Bodies.circle(200,150,25,balloptions)
  World.add(world,ball);

  console.log(ground);
}

function draw() {
  background(0);  
  Engine.update(engine);
  console.log(ball.speed)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode(RADIUS)
  circle(ball.position.x,ball.position.y,25)
}