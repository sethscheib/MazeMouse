function Population() {
    this.mice = [];
    this.popsize = 25;
    this.matingpool = [];
    this.count = 0;
  
    // Associates a Mouse to an array index
    for (let i = 0; i < this.popsize; i++) {
      this.mice[i] = new Mouse();
    }
  
    this.eval = function() {
  
      let maxfit = 0;
      for (let i = 0; i < this.popsize; i++) {
        this.mice[i].calcFitness();
        if (this.mice[i].fitness > maxfit) {
          maxfit = this.mice[i].fitness;
        }
      }
      for (let i = 0; i < this.popsize; i++) {
        this.mice[i].fitness /= maxfit;
      }
  
      this.matingpool = [];
      for (let i = 0; i < this.popsize; i++) {
        let n = this.mice[i].fitness * 100;
        for (let j = 0; j < n; j++) {
          this.matingpool.push(this.mice[i]);
        }
      }
    }

    this.select = function() {
      let newmice = [];
      for (let i = 0; i < this.mice.length; i++) {
        let parentA = random(this.matingpool).dna;
        let parentB = random(this.matingpool).dna;
        let child = parentA.crossover(parentB);
        child.mutation();
        newmice[i] = new Mouse(child);
      }
      this.mice = newmice;
    }
  
    this.run = function() {
      for (let i = 0; i < this.popsize; i++) {
        this.mice[i].update(this.count);
        this.mice[i].show();
      }
      this.count++;
      fill(25);
      text(this.count, 20, 20);
    }
  }