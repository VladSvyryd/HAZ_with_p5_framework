class gun extends Interactions {

    constructor() {
        super();
        this.rounds = 5;
    }

    toGo() {
        this.rounds--;
        this.guns--;
        this.printAmA();
    }


}
