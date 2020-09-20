var ball,img,paddle;
var ballimg,paddleimg;
var edge;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballimg = loadImage("ball.png");
  paddleimg = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball=createSprite(50,200,10,10);
  paddle=createSprite(350,200,10,10);

  
  /* assign the images to the sprites */
  ball.addImage("ball",ballimg)
  paddle.addImage("paddle",paddleimg)

  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX=9;

}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  edge=createEdgeSprites()
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(edge[0]);
  ball.bounceOff(edge[2]);
  ball.bounceOff(edge[3]);
  
  

  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 if (ball.isTouching(paddle)){
     ball.velocityY=random(-5,5);
     }
  /* Prevent the paddle from going out of the edges */ 
    ball.bounceOff(paddle);

  
  if(keyDown(UP_ARROW))
  {
     paddle.y=paddle.y-10;
  }
  
  if(keyDown(DOWN_ARROW))
  {
     paddle.y=paddle.y+10;

  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

