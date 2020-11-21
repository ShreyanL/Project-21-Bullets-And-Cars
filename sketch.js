var bullet, wall;
var speed, weight;
var damage;
var thickness;

function setup() 
{
  createCanvas(1600, 400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(20, 200, 20, 10);
  bullet.shapeColor = rgb(255, 255, 255);

  wall = createSprite(1200, 200, thickness,  height/2);
  wall.shapeColor = rgb(80, 80, 80);

  
  bullet.velocityX = speed;

}


function draw() 
{
  background(0);

  drawSprites();

  if (hasCollided(bullet, wall)) 
  {
      bullet.velocityX = 0;        
            
      damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);

      if (damage < 10)
      {
        wall.shapeColor = rgb(0, 255, 0);
      }

      if (damage > 10)
      {
        wall.shapeColor = rgb(255, 0, 0);
      }
      
  }

  
}

function hasCollided(bullet, wall)
{
    bulletRightEdge = bullet.x + bullet.width;
    wallLeftEdge = wall.x;
    
    if (bulletRightEdge >= wallLeftEdge)
    {
      bullet.velocityX = 0;
      return true;
    }

    return false;

}