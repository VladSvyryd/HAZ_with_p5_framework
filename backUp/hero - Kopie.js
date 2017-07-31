var gravity = 0.2;


function Hero(x, y) {

    this.x = x;
    this.y = y;
    this.yspeed = 0;
    this.r = 255;
    this.g = 0;
    this.b = 255;



    this.display = function () {

        fill(this.r, this.g, this.b);
        noStroke();
        ellipse(this.x, this.y, 15, 15);
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
