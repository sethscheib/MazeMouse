function Population() {
    this.mice = [];
    this.popsize = 20;
    this.count = 0;
    this.lifespan = 500;

    for(let i=0; i<this.popsize; i++){
        this.mice[i] = new Mouse(this.lifespan);
    }

    this.run = function() {
        for(let i=0; i<this.popsize; i++){
            this.mice[i].update(this.count);
            this.mice[i].show();
            fill(255);
            text(this.count, 10, 20);
        }
        this.count++;
    }
}