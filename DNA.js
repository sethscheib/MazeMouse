function DNA(genes) {
    this.lifespan = 300;
    if(genes) this.genes = genes; 
    else{
        this.genes = [];   
        for(let i=0; i<this.lifespan; i++){
            this.genes[i] = createVector(random(-1, 1), random(-1, 1));
            this.genes[i] = this.genes[i].setMag(.1);
        }
    }

    this.crossover = function(partner) {
        let newgenes = [];
        let mid = floor(random(this.genes.length));
        for(let i=0; i<this.genes.length; i++){
            if(i>mid) newgenes[i] = this.genes[i];
            else newgenes[i] = partner.genes[i];
        }
        return new DNA(newgenes);
    }

    this.mutation = function() {
        for(let i=0; i<this.genes.length; i++){
            if(random() < .01){
                this.genes[i] = createVector(random(), random());
                this.genes[i].setMag(.1);
            }
        }
    }
}