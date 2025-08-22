"use strict";
// 21. Create a generic Repository class with methods add(), getAll().
class Repository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
const repo = new Repository();
repo.add(1);
repo.add(2);
console.log(repo.getAll());
//# sourceMappingURL=ex21.js.map