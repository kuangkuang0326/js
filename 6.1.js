class vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(other) {
        return new vec(this.x + other.x, this.y + other.y);
    }
    minus(other) {
        return new vec(this.x - other.x, this.y - other.y);
    }
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
console.log(new vec(1, 2).plus(new vec(2, 3)));
console.log(new vec(1, 2).minus(new vec(2, 3)));
console.log(new vec(1, 2).length);