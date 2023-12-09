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


class groupiterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }
    next() {
        if (this.position >= this.group.contents.length) {
            return { done: true };
        } else {
            let result = { value: this.group.contents[this.position], done: false };
            this.position++;
            return result;
        }
    }


}
for (let value of group.from(["a", "b", "c"])) {
    console.log(value);
}