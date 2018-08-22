let population;
let targetN;

function setup() {
    createCanvas(800, 800);
    population = new Population();
    targetN = createVector(width/2, 10);
}

function draw() {
    background(51);

    push();
    fill(255);
    rectMode(CENTER);
    rect(targetN.x, targetN.y, width, 20);
    pop();

    population.run();

    //if(population.count == population.mice[0].dna.lifespan){
    //    population.eval();
    //    population.select();
    //}
}