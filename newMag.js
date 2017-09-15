class Mag{

     constructor(x, y, q) {
    this.img = loadImage("pics/ag.png");
    this.x = x;
    this.y = y;
    this.quantity = q;
    this.width = 20.2; //height in pixels (height / 10)
    this.height = 45; //width in pixels (width / 10)
    this.radius = 20.2;
    }

    load (obj) {
        obj.length += this.quantity;
    }
    display () {
    
        imageMode(CENTER);
        image(this.img, this.x, this.y, this.img.width / 10, this.img.height / 10);

    }

}