let population;
let target;
let genNum = 1;
let obs = [];

function setup() {
    createCanvas(800, 800);
    population = new Population();
    target = createVector(width-50, height-50);
    obs.push(new Obstical(5, 2, 5, 5));
    obs.push(new Obstical(2, 5, 5, 5));
    obs.push(new Obstical(0, 7, 5, 7));
    obs.push(new Obstical(5, 3, 8, 3));

}

function draw() {
    background(51);

    for(let i=0; i<obs.length; i++){
        obs[i].show();
    }

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