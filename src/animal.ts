class Animal {
  name: string;
  constructor(animalName: string) {
    this.name = animalName;
  }

  greet(): string {
    return `Hello, ${this.name}`;
  }


  move(distanceInMeters: number = 0): void {
    console.log(`${this.name} moved ${distanceInMeters}`);
  }
}

class Dog extends Animal {

  constructor(name: string) {
    super(name);
  }

  move(distanceInMeters: number = 5) {
    console.log('Gukgugkkk');
    super.move(distanceInMeters);
  }
}

const dog: Dog = new Dog('Anjingku..');
console.log(dog.greet());
dog.move();

interface Zoo {

}



