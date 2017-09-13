var gravity = 0.1;


function Zombie(x, y,yspeed,xspeed) {

    this.x = x;
    this.y = y;
    this.life_opacity =255;
    this.yspeed = yspeed;
    this.xspeed = xspeed;
    this.movingSpeed = 0.5;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.radius = 20;
    this.detected;
    this.onScr ;
    this.useless = false;
    this.die_disapear = false;
    if(this.x >0 && this.x < width ){
      this.onScr = true;
    }




    this.beAgressive_speedUp = function(){
      this.movingSpeed += 0.005;
    }
    this.display = function () {

        fill(this.r, this.g, this.b,this.life_opacity);
        noStroke();
        ellipse(this.x, this.y, this.radius, this.radius);
    }
    this.onScreen = function(){
    /*  if(this.x< 1000){
        this.onScr = true;
      }else {
          this.onScr = false;
      }
      */
      if(this.x > -600 && this.x < width +600 && this.y > -600 && this.y < height +600){
        this.onScr = true;
      }else {
        this.onScr = false;
      }
    }




    this.update = function () {


        if (!this.detected) {
            this.y += this.yspeed  +random(-0.2, 0.2) ;
            this.x += this.xspeed + random(-0.2, 0.2) ;
        }
        if(this.die_disapear){
          this.life_opacity -= 25;
        }
        this.onScreen();


        /*
        this.yspeed += gravity;
        */
        this.colChange = function () {

        }
    }
    this.intersects = function (object) {

        var d = dist(this.x, this.y, object.x, object.y);

        if (d < this.radius + object.radius) {

            return true;

        } else {

            return false;
        }

    };
    this.detectHero = function (obj) {

        var d = dist(this.x, this.y, obj.x, obj.y);


        if (d < this.radius + obj.safe / 2) {
            this.detected = true;
            return true;

        } else {
            this.detected = false;
            return false;
        }

    };



    this.attack = function (hero) {

        if (this.x > hero.x) {
            this.moveLeft(this.movingSpeed + random(-0.5, 0.5));
        } else {
            this.moveRight(this.movingSpeed + random(-0.5, 0.5));
        }
        if (this.y > hero.y) {
            this.moveUp(this.movingSpeed + random(-0.5, 0.5));
        } else {
            this.moveDown(this.movingSpeed + random(-0.5, 0.5));
        }

    }
    this.moveRight = function (speedo) {

        this.x = this.x + speedo;
    }
    this.moveLeft = function (speedo) {

        this.x = this.x - speedo;
    }
    this.moveUp = function (speedo) {
        this.y = this.y - speedo;
    }
    this.moveDown = function (speedo) {
        this.y = this.y + speedo;
    }


}
