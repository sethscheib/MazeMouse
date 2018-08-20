function Mouse(lifespan) {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector();
    this.acc = createVector();
    this.body = new tri();
    this.color = color(random()*255, random()*255, random()*255);

    this.genes = [];
    for(let i=0; i<lifespan; i++){
        this.genes[i] = createVector(random(-1, 1), random(-1, 1));
        this.genes[i] = this.genes[i].mult(.05);
    }

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.update = function(count) {
        this.applyForce(this.genes[count]);
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