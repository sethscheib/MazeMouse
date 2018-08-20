function tri() {
    this.show = function(color) {
        push();
        fill(color);
        angleMode(DEGREES);
        rotate(-90);
        triangle(-6, -6, 6, -6, 0, 12)
        pop();
    }
}