var gravity = 0.2;


function Hero(x, y, radius, safe) {

    this.x = x;
    this.y = y;
    this.yspeed = 0;
    this.r = 0;
    this.g = 127;
    this.b = 255;
    this.radius = radius;
    this.safe = safe
    this.moving = false;




    this.display = function () {
        this.displayClear();
        fill(this.r, this.g, this.b);
        noStroke();
        ellipse(this.x, this.y, this.radius, this.radius);
        this.safeZone();
        if (this.moving == false && this.safe > safe) {
            this.safe -= 0.5;
        }

    }
    this.displayClear = function () {
        fill(51, 51, 51);
        noStroke();
        ellipse(this.x, this.y, this.radius + 5, this.radius + 5);



        ellipse(this.x, this.y, this.safe + 5, this.safe + 5);
    }
    this.check = function () {
        if (this.y >= height - this.radius) {
            this.y = height - this.radius;
        } else if (this.y <= 0 + this.radius) {
            this.y = 0 + this.radius;
        } else if (this.x >= width - this.radius) {
            this.x = width - this.radius;
        }
        if (this.x <= 0 + this.radius) {
            this.x = 0 + this.radius;
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
    this.intersects = function (obje) {

        var d = dist(this.x, this.y, obje.x, obje.y);

        if (d < this.radius + obje.radius) {

            return true;

        } else {

            return false;
        }

    };
    this.intersectsII = function (obj) {

        var d = dist(this.x, this.y, obj.x, obj.y);

        if (d < this.radius + obj.width / 2) {

            return true;


        } else {

            return false;
        }

    };



    this.safeZone = function () {

        fill(255, 0, 0, 20);
        ellipse(this.x, this.y, this.safe + random(-2, 2), this.safe + random(-2, 2));
    };
    this.safeZoneIncrease = function () {
        this.safe += 20;
    };

}
