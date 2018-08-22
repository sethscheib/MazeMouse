let population;
let target;
let genNum = 1;

function setup() {
    createCanvas(800, 800);
    population = new Population();
    target = createVector(width-50, height-50);
}

function draw() {
    background(51);

    push();
    fill(255);
    rectMode(CENTER);
    ellipse(target.x, target.y, 20);
    pop();

    population.run();

    if(population.count >= population.mice[0].dna.lifespan){
        population.count = 0;
        population.eval();
        population.select();
        genNum++;
    }
    text("Gen: "+genNum, 50, 20);
}