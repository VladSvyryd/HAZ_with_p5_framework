var balls = [];
var hero;
var zombies = [];
var bullets = [];




function setup() {
 createCanvas(1200, 720);
 hero = new Hero((width / 2), height / 2);
 for (var i = 0; i < 20; i++) {
  zombies[i] = new Zombie(random(width), random(height));
 }
}

function mousePressed() {

 var xToFly = mouseX;
 var yToFly = mouseY;
 bullets.push(new Bullet(hero.x, hero.y));
 print(bullets);


}

function mouseDragged() {
 if (keyIsDown(CONTROL)) {
  balls.push(new Ball(mouseX, mouseY));
  print(balls);
 }
}

function zombieAtack() {
 for (var z = 0; z < zombies.length; z++) {
  if (zombies[z].moveToAttackX(hero) == true) {
   zombies[z].moveLeft(0.5);
  } else {
   zombies[z].moveRight(0.5);
  }
  if (zombies[z].moveToAttackY(hero) == true) {
   zombies[z].moveUp(0.5);
  } else {
   zombies[z].moveDown(0.5);
  }
 }
}


function makeyPressed() {
 //console.log(keyCode);
 if (keyIsDown(RIGHT_ARROW)) {
  hero.moveRight(1.5);
 }
 if (keyIsDown(LEFT_ARROW)) {
  hero.moveLeft(1.5);
 }
 if (keyIsDown(UP_ARROW)) {
  hero.moveUp(1.5);
 }
 if (keyIsDown(DOWN_ARROW)) {
  hero.moveDown(1.5);
 }
 /*
 switch(keyCode){
   case RIGHT_ARROW:if(keyIsDown(RIGHT_ARROW)){
    hero.moveRight(5);
   } break;
   case UP_ARROW:  hero.moveUp();break;
   case LEFT_ARROW:  hero.moveLeft();break;
   case DOWN_ARROW:  hero.moveDown();break;
   }*/
}

function draw() {
 background(51);
 hero.display();
 makeyPressed();



 for (var b = 0; b < bullets.length; b++) {


  stroke(255);
  strokeWeight(8);

  bullets[b].update();
  bullets[b].show();



  if (bullets[b].pos.x < 0 || bullets[b].pos.x > width ||

   bullets[b].pos.y < 0 || bullets[b].pos.y > height) {
   bullets.splice(b, 1);
   print(bullets.length)

  }

 }

 //zombieAtack();
 for (var i = 0; i < balls.length; i++) {
  balls[i].display();
  balls[i].update();
 }


 for (var a = 0; a < zombies.length; a++) {
  zombies[a].display();
  zombies[a].update();

  for (var j = 0; j < bullets.length; j++) {


   if (bullets[j] && a != j && zombies[a].intersects(bullets[j])) {
    print("now");
    zombies.splice(a, 1);
    bullets.splice(j, 1);
    print(zombies.length);
   }
  }
 }
 /*
     stroke(255);
     line(hero.x, hero.y, mouseX, mouseY);
  
     /*
     if(ball.x > width || ball.x < 0){
      ball.xspeed = ball.xspeed * -1;
      
     }
     if(ball.y > height || ball.y < 0){
      ball.yspeed = ball.yspeed * -1;
      
     }
     ball.x = ball.x + ball.xspeed;
     ball.y = ball.y + ball.yspeed;
      
     */
}

function milesToKm(miles) {

 var km = miles * 1.6;
 return km;
}







function bla()

{
 for (var x = 0; x <= mouseX; x += 50) {
  for (var y = 0; y <= height; y += 50) {

   noStroke();
   fill(random(255), random(255), random(255));

   ellipse(ball.x, ball.y, 40, 40);

  }

 }
}
