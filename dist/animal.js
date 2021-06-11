class Animal {
    constructor(animalName) {
        this.name = animalName;
    }
    greet() {
        return `Hello, ${this.name}`;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log('Gukgugkkk');
        super.move(distanceInMeters);
    }
}
const dog = new Dog('Anjingku..');
console.log(dog.greet());
dog.move();
