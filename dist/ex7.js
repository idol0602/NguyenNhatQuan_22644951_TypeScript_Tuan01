// 7. Write a class User with private property name and getter/setter.
export class User {
    _name;
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        if (newName.trim().length === 0) {
            throw new Error("Name cannot be empty.");
        }
        this._name = newName;
    }
}
let u = new User("Quan");
u.name = "Quan123";
console.log(u.name);
//# sourceMappingURL=ex7.js.map