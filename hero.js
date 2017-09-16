var gravity = 0.2;


class Hero {
    constructor(x, y, radius, save){
    this.x = x;
    this.y = y;
    this.yspeed = 0;
    this.r = 0;
    this.g = 127;
    this.b = 255;
    this.radius = radius;
    this.save = save;
    this.saveStart = save;
    this.moving = false;

}

    display() {

        fill(this.r, this.g, this.b);
        noStroke();
        ellipse(this.x, this.y, this.radius, this.radius);
        this.saveZone();
        if (this.moving == false && this.save >= this.saveStart) {
            this.save -= 0.5;

        }

    }

    check() {
        if (this.y >= height - this.radius) {
            this.y = height - this.radius;
        } else if (this.y <= 0 + this.radius) {
            this.y = 0 + this.radius;
        } else if (this.x >= width - this.radius) {
            this.x = width - this.radius;
        }
        else if (this.x <= 0 + this.radius) {
            this.x = 0 + this.radius;
        }
    }
    moveRight(speedo) {

        this.x = this.x + speedo;
        this.save += 0.5;
        this.moving = true;
    }
    moveLeft(speedo) {

        this.x = this.x - speedo;
        this.save += 0.5;
        this.moving = true;
    }
    moveUp(speedo) {
        this.y = this.y - speedo;
        this.save += 0.5;
        this.moving = true;
    }
    moveDown(speedo) {
        this.y = this.y + speedo;
        this.save += 0.5;
        this.moving = true;
    }
    intersects(obje) {

        var d = dist(this.x, this.y, obje.x, obje.y);

        if (d < this.radius + obje.radius) {

            return true;

        } else {

            return false;
        }

    };
    intersectsII(obj) {

        var d = dist(this.x, this.y, obj.x, obj.y);

        if (d < this.radius + obj.width / 2) {

            return true;


        } else {

            return false;
        }

    };



    saveZone() {

        fill(255, 0, 0, 10);
        ellipse(this.x, this.y, this.save + random(-2, 2), this.save + random(-2, 2));
    };
    saveZoneIncrease(size) {
        this.moving= false;
        this.save += size;
    };

}
