var balls = [];
var hero;
var zombies = [];
var bullets = [];
var mouse1;
var mouse2;
var alive = true;


function setup() {
 createCanvas(1200, 720);
 hero = new Hero(width / 2, height / 2);
 for (var i = 0; i < 40; i++) {
  zombies[i] = new Zombie(100 - random(width), random(height));

 }

 angleMode(DEGREES);

}

function preload() {
 shotSound = loadSound("FNP45.1.mp3");
}

function mousePressed() {
 shotSound.play();
 hero.safe += 20;
 var xToFly = mouseX;
 var yToFly = mouseY;
 mouse1 = map(mouseX, 0, width, 0, 10);
 mouse2 = map(mouseY, 0, height, 0, 10);
 var one = (mouseX - hero.x) / 10;
 var two = (mouseY - hero.y) / 10;
 bullets.push(new Bullet(hero.x, hero.y, one, two));
 //print("X" + one);
 //print("Y" + two);


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

function pointer() {
 var degrees = map(mouseX, 0, width / 2, 0, 360);

 var readout = "angle = " + nfc(degrees, 1, 2, 1) + "\xB0" *
  noStroke();
 fill(1);
 text(readout, 500, 15);

 var v = p5.Vector.fromAngle(radians(degrees));

 var vx = v.x;

 var vy = v.y;
 push();
 translate(width / 2, height / 2);
 noFill();
 stroke(150);
 line(0, 0, 30, 0);
 stroke(0);
 line(0, 0, 30 * vx, 30 * vy);
 pop();
}

function makeyPressed() {
 //console.log(key);

 if (keyIsDown(RIGHT_ARROW)) {
  hero.moveRight(1.5);
 } else {
  hero.moving = false;
 }
 if (keyIsDown(LEFT_ARROW)) {
  hero.moveLeft(1.5);
 } else {
  hero.moving = false;
 }
 if (keyIsDown(UP_ARROW)) {
  hero.moveUp(1.5);
 } else {
  hero.moving = false;
 }
 if (keyIsDown(DOWN_ARROW)) {
  hero.moveDown(1.5);
 } else {
  hero.moving = false;
 }

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


function dieMenu() {
 background(0);
 var menu = "You are DEAD!!!"

 fill(255);
 textSize(50);
 textAlign(CENTER);
 text(menu, width / 2, height / 2);
}

function draw() {


 if (alive) {
  background(51);

  hero.display();

  makeyPressed();
  //pointer();
  <!-- DRAW BULLETS -->
  for (var b = 0; b < bullets.length; b++) {
   stroke(255);
   strokeWeight(8);
   bullets[b].update();
   bullets[b].show();
   if (bullets[b].pos.x < 0 || bullets[b].pos.x > width ||
    bullets[b].pos.y < 0 || bullets[b].pos.y > height) {
    bullets.splice(b, 1);
    //print(bullets.length)
   }
  }

  //zombieAtack();
  <!-- DRAW BALLS -->
  for (var i = 0; i < balls.length; i++) {
   balls[i].display();
   balls[i].update();
  }

  <!-- DRAW Zombies and Collisions with Hero -->

  for (var a = 0; a < zombies.length; a++) {
   if (zombies[a]) {
    zombies[a].display();
    zombies[a].update();
    if (hero.intersects(zombies[a])) {
     // print("killed");
     //alive = false;
    }
    if (zombies[a].detectHero(hero)) {
     //ATACK HEROATACK HEROATACK HEROATACK HEROATACK HEROATACK HEROATACK HEROATACK HEROATACK ATACK HERO
     print(zombies[a].toString + "attacking")
    }
    if (zombies[a].x > width ||

     zombies[a].y < 0 || zombies[a].y > height) {
     zombies.splice(a, 1);
     zombies.push(new Zombie(50 - random(width), random(height)));
    }
   }

   <!-- DRAW Zombies and collisions with bullets -->
   for (var j = 0; j < bullets.length; j++) {


    if (bullets[j] && a != j && zombies[a].intersects(bullets[j])) {
     // print("now");
     zombies.splice(a, 1);
     zombies.push(new Zombie(100 - random(width), random(height)));
     //print(zombies.length);
     bullets.splice(j, 1);

     // print(zombies.length);
    }
   }

  }
 } else dieMenu();

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
