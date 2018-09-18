function Obstical(x1, y1, x2, y2) {
    let mult = 100;
    this.vert;
    this.x = x1*mult;
    this.y = y1*mult;
    this.w = 9;
    this.l = dist(x1, y1, x2, y2)*mult;

    this.show = function() {
        fill(255, 100);

        if(x1 == x2){
            rect(this.x, this.y, this.w, this.l);
            this.vert = false;
        }
        if(y1 == y2){
            rect(this.x, this.y, this.l, this.w);
            this.vert = true;
        }
    }
}