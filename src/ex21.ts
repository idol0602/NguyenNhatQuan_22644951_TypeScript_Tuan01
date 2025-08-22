// 21. Create a generic Repository class with methods add(), getAll().

class Repository<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const repo = new Repository<number>();
repo.add(1);
repo.add(2);
console.log(repo.getAll());
