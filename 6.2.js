class group {
    constructor() {
        this.contents = [];
    }

    add(value) {
        if (!this.has(value)) {
            this.contents.push(value);
        }
    }
    delete(value) {
        this.contents = this.contents.filter(v => v !== value);
    }
    has(value) {
        return this.contents.includes(value);
    }
    static from(collection) {
        let newgroup = new group;
        for (let value of collection) {
            newgroup.add(value);
        }
        return newgroup;
    }
}
console.log(group.from([10, 20]));
let newnewgroup = group.from([10, 20]);
console.log(newnewgroup.has(10));
console.log(newnewgroup.has(30));
newnewgroup.add(10);
newnewgroup.delete(10);
console.log(newnewgroup.has(10));