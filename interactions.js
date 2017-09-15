class Interactions() {
    constructor() {
        this.guns = 9;
    }

    printAmA() {
        print("123");
    }

    this.moveRight(speedo) {

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

}
