var gravity = 0.1;


function Zombie(x, y) {

    this.x = x;
    this.y = y;
    this.yspeed = 0.1;
    this.xspeed = 0.5;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.radius = 20;
    this.detected;


    this.display = function () {

        fill(this.r, this.g, this.b);
        noStroke();
        ellipse(this.x, this.y, this.radius, this.radius);
    }
    this.outOffScreen = function () {
        if (x > width || this.y < 0 || this.y > height) {
            return true;

        }
        return false;
    }
    this.update = function () {


        if (!this.detected) {
            this.y += this.yspeed  +random(-0.5, 0.5) ;
            this.x += this.xspeed + random(-0.5, 0.5) ;
        }



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
            this.moveLeft(0.5 + random(-1, 1));
        } else {
            this.moveRight(0.5 + random(-1, 1));
        }
        if (this.y > hero.y) {
            this.moveUp(0.5 + random(-1, 1));
        } else {
            this.moveDown(0.5 + random(-1, 1));
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
