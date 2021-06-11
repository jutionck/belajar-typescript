// Destructuring ?? Mengeluarkan isi dari sebuah object atau array

// Object
export default class Person {
  name: string;
  age: number;
  gender: string;
  phone: string;
  origin: string;
  address: {
    roadName: string;
    district: string;
    city: string;
  }

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}