function Mouse(dna) {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector();
    this.acc = createVector();
    this.body = new tri();
    this.color = color(random()*255, random()*255, random()*255);

    if(dna) this.dna = dna;
    else this.dna = new DNA();
    
    this.calcFitness = function() {
        let d = dist(this.pos.x, this.pos.y, width/2, height/2);
        this.fitness = map(d, 0, width, width, 0);
    }

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.update = function(count) {
        this.applyForce(this.dna.genes[count]);
        count++;

        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);

        if(this.pos.x >= width) this.pos.x = 1;
        if(this.pos.x <= 0) this.pos.x = width;
        if(this.pos.y >= height) this.pos.y = 1;
        if(this.pos.y <= 0) this.pos.y = height;
    }

    this.show = function() {
        push();
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        this.body.show(this.color);
        pop();
    }   
}