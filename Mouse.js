function Mouse(dna) {
    this.pos = createVector(50, 50);
    this.vel = createVector();
    this.acc = createVector();
    this.body = new tri();
    this.color = color(random()*255, random()*255, random()*255);
    this.completed = false;
    this.crashed = false;

    if(dna) this.dna = dna;
    else this.dna = new DNA();
    
    this.calcFitness = function() {
        let d = dist(this.pos.x, this.pos.y, target.x, target.y);
        this.fitness = map(d, 0, width, width, 0);

        if(this.completed) this.fitness *= 5;
        if(this.crashed) this.fitness /= 5;
    }

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.update = function(count) {

        if(dist(this.pos.x, this.pos.y, target.x, target.y) < 10){
            this.completed = true;
        }

        this.applyForce(this.dna.genes[count]);
        count++;

        if(!this.completed && !this.crashed){
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
        }

        if(this.pos.x >= width || this.pos.x <= 0 || 
            this.pos.y >= height || this.pos.y <= 0) {
                this.crashed = true;
            }
    }

    this.show = function() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        this.body.show(this.color);
        pop();
    }   
}