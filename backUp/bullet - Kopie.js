function Bullet(x, y, veloX, veloY) {
    this.pos = createVector(x, y);
    this.vel = createVector(-50, 0);
    this.acc = createVector(0, 0);
    this.radius = 0;

    //this.mag = mag();
    //this.heading = heading();

    this.applyForce = function () {
        this.acc.add(force);
    }

    this.update = function () {
        this.vel.add(this.acc);
        this.pos.add(this.vel);

        this.acc.mult(0);
    }



    this.show = function () {
        point(this.pos.x, this.pos.y);
    }

    this.intersects = function (object) {

        var d = dist(this.pos.x, this.pos.y, object.x, object.y);

        if (d < this.radius + object.radius) {

            return true;

        } else {

            return false;
        }

    };

}
