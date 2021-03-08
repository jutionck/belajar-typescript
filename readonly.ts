class Employee {
  readonly empCode: number;
  empName: string;
  
  constructor(code: number, name: string)     {
      this.empCode = code;
      this.empName = name;
  }
}
let emp = new Employee(10, "John");
//emp.empCode = 20; //Compiler Error
emp.empName = 'Bill'; //Compiler Error