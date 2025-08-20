// 7. Write a class User with private property name and getter/setter.
export class User {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.trim().length === 0) {
      throw new Error("Name cannot be empty.");
    }
    this._name = newName;
  }
}

let u: User = new User("Quan")
u.name = "Quan123"
console.log(u.name)