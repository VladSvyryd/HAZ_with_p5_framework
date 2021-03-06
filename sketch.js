var balls = [];
var hero;
var zombies = [];
var bullets = [];
var mouse1;
var mouse2;
var alive = true;
var pause = false;
var count = 20;
var ammo = []
var magBuffer = [];
var activeMagbuffer = [];
var zombiesKilled = 0;
var timeCounter =0;
var All_zombies_in =0;
var picsBuffer = [];

function setup() {
 createCanvas(1200, 720);
 cursor(CROSS);

 //noCursor();
 hero = new Hero(width / 2, height / 2, 20, 80);
 zombieSetter(60,0,-600,random(0,0.05),0.5);
 zombieSetter(80,width,width+600,-0.05,-0.5);
 ammoPacksPreload(2);
 getAmmoOnStart(13);
 print(ammo.length);
 //angleMode(DEGREES);#
 //ammoPacksOnScreen(5, 13);
var button = createButton("pause");
button.mousePressed(pauseOn);
var button1 = createButton("resume");
button1.mousePressed(restart);
}

function pauseOn(){
  pause = true;
}
function restart(){
  pause = false;
}


//Set_A_Start_AmmoPacks_Amount
function ammoPacksPreload(size) {
 for (var i = 0; i < size; i++) {
  magBuffer.push(new Mag(0, 0, 0));
 }
}

function ammoPacksOnScreen(num, bullets) {
 for (var n = 0; n < num; n++) {
  var x = random(width - 20);
  var y = random(height - 20);
  var amount = bullets;
  var temp = magBuffer[n];
  temp.x = x;
  temp.y = y;
  temp.quantity = amount;
  activeMagbuffer.push(temp);
 }
}

//Zombie_Amount_Setter        DANGER ARRAY COULD BE OVERSIZED (OUT_OF_MEMORY)
function zombieSetter(amount,offsetLeft,offsetRight,yspeed,xspeed) {
 for (var i = 0; i < amount; i++) {
  zombies[All_zombies_in] = new Zombie(random(offsetLeft,offsetRight), random(height),yspeed,xspeed);
  All_zombies_in++;
 }
}
//Get Ammo at the beginning of the game
function getAmmoOnStart(bullet) {
 for (var i = 0; i < bullet; i++) {
  ammo.push(new Bullet(0, 0, 0, 0));
 }
}

//Sound Preload/ /

function preload() {
 shotSound = loadSound("sounds/FNP45.1.mp3");
 emptyMag = loadSound("sounds/Dry_Fire_006.mp3");
}


//  Fire the bullets by sending them from the AmmoArray into BulletsArray
function fire() {
 var lenX = (mouseX - hero.x);
 var lenY = (mouseY - hero.y);
 var l = Math.sqrt(lenX * lenX + lenY * lenY);
 var dirX = (lenX / l) * 12;
 var dirY = (lenY / l) * 12;
 if (ammo.length != 0) {
  shotSound.play();
  hero.saveZoneIncrease(20);
  var dsd = ammo.pop();
  dsd.pos = createVector(hero.x, hero.y);
  dsd.vel = createVector(dirX, dirY);
  print(ammo.length);
  bullets.push(dsd);
 } else {
  emptyMag.setVolume(0.1);
  emptyMag.play();
 }

}

// ClickMouse Event
function mousePressed() {
 fire();
}

//DragMouse Event
function mouseDragged() {
 if (keyIsDown(CONTROL)) {
  balls.push(new Ball(mouseX, mouseY));
 } else if (keyIsDown(SHIFT)) {
  fire();
 }
}

/*
Old function to atack a hero
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
}*/



// HeroPointer
function pointer1() {
 // A vector that points to the mouse location
 var mouse = new p5.Vector(mouseX, mouseY);
 // A vector that points to the center of the window
 var center = new p5.Vector(hero.x, hero.y);
 // Subtract center from mouse which results in a vector that points from center to mouse
 mouse.sub(center);

 // Normalize the vector
 mouse.normalize();

 // Multiply its length by 150 (Scaling its length)
 mouse.mult(25);
 // Draw the resulting vector
 stroke(255);
 strokeWeight(1);
 line(hero.x, hero.y, mouse.x + hero.x, mouse.y + hero.y);
}

// Options to move a hero
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
/*function makeyPressed() {
 //console.log(key);

 if (keyIsDown(event)) {
   var keyCode = event.keyCode;
  switch(keyCode){
    case 68:  //d
      hero.moveRight(1.5);
    break;
    case 83:  //s
        keyS = true;
    break;
    case 63:  //a
        keyA = true;
    break;
 }
}
}*/


/*
switch(keyCode){
  case RIGHT_ARROW:if(keyIsDown(RIGHT_ARROW)){
   hero.moveRight(5);
  } break;
  case UP_ARROW:  hero.moveUp();break;
  case LEFT_ARROW:  hero.moveLeft();break;
  case DOWN_ARROW:  hero.moveDown();break;
  }*/

//ScreenOfDeath
function dieMenu() {
 background(0);
 var menu = "You are DEAD!!!"
 fill(255);
 textSize(50);
 textAlign(CENTER);
 text(menu, width / 2, height / 2);
}


// Get Ammo
function loadAmmo(size) {
 for (var i = 0; i < size; i++) {
  ammo.push(new Bullet());
 }
}

function heroAction() {
 hero.display();
 hero.check();
 for (var i = 0; i < activeMagbuffer.length; i++) {

  if(activeMagbuffer[i]){
  if (hero.intersectsII(activeMagbuffer[i])) {
           if (ammo.length >= 0) {

            activeMagbuffer[i] = null;
            loadAmmo(9);

        }else{
      fill(255,0,0);
      text("Rounds:" + ammo.length, width - 190, height - 40);

    }
    }
}
 if (hero.x < 0) {
  hero.x = 0;
 }
}
}
///Just count a second of the game
var timer = setInterval(function (){
  timeCounter++;
},1000);
function textInfo() {

textAlign(CENTER)
 textSize(32);
 fill(0);
 text("Kills:" +
  zombiesKilled, width - 150, 40);

 text("Rounds:" + ammo.length, width - 190, height - 40);
 fill(255);

 text("Still alive: " + timeCounter +" sec", width/2,40 );
}


  // Respawn an AmmoPacks
var x = setInterval(function () {
 respawn_of_AmmoPacks(2,13)
}, 10000);
function respawn_of_AmmoPacks(num,bullets){
  for (var n = 0; n < num; n++) {
   var x = random(width - 20);
   var y = random(height - 20);
   var amount = bullets;
   var temp = magBuffer[n];
   temp.x = x;
   temp.y = y;
   temp.quantity = amount;
   activeMagbuffer.push(temp);
  }
}



//ANIMATION HERE_ANIMATION HERE_ANIMATION HERE_ANIMATION HERE
function draw() {
 background(51);

 if (alive&&!pause) {

  heroAction();
  textInfo();
  //<!-- hero action-->


  for (var m = 0; m < activeMagbuffer.length; m++) {
   if (activeMagbuffer[m]) {
    activeMagbuffer[m].display();


   }
 }





  makeyPressed();
  pointer1();

  //print(hero.intersectsII(mag));     /// pick up AMMO

  <!-- DRAW BULLETS -->
  for (var b = 0; b < bullets.length; b++) {

   if (bullets[b]) {
    bullets[b].update();
    bullets[b].show();
    if (bullets[b].outOffScreen()) bullets.splice(b, 1);

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

    zombies[a].update();
    zombies[a].display();
    if (zombies[a].detectHero(hero)) {
     zombies[a].attack(hero);
     zombies[a].beAgressive_speedUp();
     if (zombies[a].intersects(hero)) {
      //print("killed");
      //alive = false;
     }
    }
    if (!zombies[a].onScr ||  zombies[a].useless) {
     zombies.splice(a, 1);
     print(zombies.length);
     zombies.push(new Zombie(random(-800,0), random(height),random(0,0.05),0.5));
    }
   }

   <!-- DRAW Zombies and collisions with bullets -->
   for (var j = 0; j < bullets.length; j++) {


    if (bullets[j] && a != j && bullets[j].intersects(zombies[a]) ) {
     zombies[a].useless = true;
     // print("now");
     zombiesKilled += 1;
     if(zombies[a].life_opacity <=0){
       zombies.splice(a, 1);
       zombies.push(new Zombie(random(-100), random(height),random(0,0.05),0.5));

     }

     bullets.splice(j, 1);

     // print(zombies.length);
    }
   }

  }

} //else dieMenu();             //Deathscreen after Zombie won

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
