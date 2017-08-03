function Bullet(x, y, veloX, veloY) {
    this.pos = createVector(x, y);
    this.vel = createVector(veloX, veloY);
    this.acc = createVector(0, 10);
    this.radius = 1;


    //this.mag = mag();
    //this.heading = heading();

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
