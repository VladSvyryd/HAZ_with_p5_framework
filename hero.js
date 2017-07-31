var gravity = 0.2;


function Hero(x, y) {

    this.x = x;
    this.y = y;
    this.yspeed = 0;
    this.r = 0;
    this.g = 127;
    this.b = 255;
    this.radius = 15;
    this.safe = 50;
    this.moving = false;



    this.display = function () {

        fill(this.r, this.g, this.b);
        noStroke();
        ellipse(this.x, this.y, this.radius, this.radius);
        this.safeZone();
        if (this.moving == false && this.safe > 50) {
            this.safe -= 0.5;
        }
    }
    this.moveRight = function (speedo) {

        this.x = this.x + speedo;
        this.safe += 0.5;
        this.moving = true;
    }
    this.moveLeft = function (speedo) {

        this.x = this.x - speedo;
        this.safe += 0.5;
        this.moving = true;
    }
    this.moveUp = function (speedo) {
        this.y = this.y - speedo;
        this.safe += 0.5;
        this.moving = true;
    }
    this.moveDown = function (speedo) {
        this.y = this.y + speedo;
        this.safe += 0.5;
        this.moving = true;
    }
    this.intersects = function (object) {

        var d = dist(this.x, this.y, object.x, object.y);

        if (d < this.radius + object.radius) {

            return true;

        } else {

            return false;
        }

    };



    this.safeZone = function () {

        fill(255, 0, 0, 20);
        ellipse(this.x, this.y, this.safe + random(-2, 2), this.safe + random(-2, 2));
    };

}
