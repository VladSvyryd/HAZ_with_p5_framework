function Bullet(x, y, veloX, veloY) {
    this.x = x; //tried to omit the pos.x by intersections
    this.y = y;
    this.pos = createVector(this.x, this.y);
    this.vel = createVector(veloX, veloY);
    this.acc = createVector(0, );
    this.radius = 1;


    //this.mag = mag();
    //this.heading = heading();
    this.outOffScreen = function () {
        if (this.pos.x < 0 || this.pos.x > width ||
            this.pos.y < 0 || this.pos.y > height) {
            return true;

        }
        return false;
    }
    this.applyForce = function () {
        this.acc.add(force);
    }

    this.update = function () {
        //this.vel.add(this.acc);
        this.pos.add(this.vel);

        this.acc.mult(0);
    }



    this.show = function () {
        stroke(255);
        strokeWeight(8);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    }

    this.intersects = function (obj) {

        var d = dist(this.pos.x, this.pos.y, obj.x, obj.y);

        if (d < this.radius + obj.radius) {

            return true;

        } else {

            return false;
        }

    };

}
