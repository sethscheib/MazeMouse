let population;

function setup() {
    createCanvas(800, 800);
    population = new Population();
}

function draw() {
    background(51);
    population.run();

    if(population.count == population.lifespan)
        population = new Population();
}