class Human {

  // Constructor: akan terpanggil pertama kali ketika object di buat
  constructor(public name: string) { }

  // Method
  sayHi() {
    return `Hello, ${this.name}`
  }
}

// Initiate Object
const jution = new Human('Jution Candra Kirana');
console.log(jution.sayHi());


// Inheritance
class superHuman extends Human {

  heroName: string;

  constructor(name: string) {
    super(name);
    this.heroName = `HERO ${name}`;
  }

  superPower() {
    return `${this.heroName} pops treys.....`
  }
}


const steph = new superHuman('Steph  Curry');
console.log(steph.sayHi());


// Penggunaan pada angular
/**
 * Pembuatan Services & Directives
 */

