export function clases() {
    console.log("Módulo de clases");

    interface KeyPair {
        key: number;
        value: string;
    }

    let kv1: KeyPair = { key:1, value:"Steve" }; // OK

    class Employee {
        empCode: number;
        empName: string;

        constructor(code: number = 0, name: string = "") {
            this.empName = name;
            this.empCode = code;
        }

        getSalary() : number {
            return 10000;
        }
    }
    let empleado = new Employee();
    empleado.empCode=27;
    console.log("Empleado Code: " + empleado.empCode);

    /*
    Herencia
     */
    class Person {
        name: string;

        constructor(name: string = "") {
            this.name = name;
        }
    }

    class Employee2 extends Person {
        empCode: number;

        constructor(empcode: number = 0, name:string = "") {
            super(name);
            this.empCode = empcode;
        }

        displayName():void {
            console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
        }
    }

    let emp = new Employee2(100, "Bill");
    console.log("Empleado displayName: " + emp.displayName()); // Name = Bill, Employee Code = 100

    interface IPerson {
        name: string;
        display():void;
    }

    interface IEmployee {
        empCode: number;
    }
    /*
    Implementando interfaces
     */
    class Employee3 implements IPerson, IEmployee {
        empCode: number;
        name: string;

        constructor(empcode: number = 0, name:string="") {
            this.empCode = empcode;
            this.name = name;
        }

        display(): void {
            console.log("Name = " + this.name +  ", Employee Code = " + this.empCode);
        }
    }

    let per:IPerson = new Employee3(100, "Bill");
    console.log(per.display()); // Name = Bill, Employee Code = 100
    /*
    Sobre carga de métodos
     */

    class Car {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        run(speed:number = 0) {
            console.log("A " + this.name + " is moving at " + speed + " mph!");
        }
    }

    class Mercedes extends Car {

        constructor(name: string) {
            super(name);
        }

        run(speed = 150) {
            console.log('A Mercedes started')
            super.run(speed);
        }
    }

    class Honda extends Car {

        constructor(name: string) {
            super(name);
        }

        run(speed = 100) {
            console.log('A Honda started')
            super.run(speed);
        }
    }

    let mercObj = new Mercedes("Mercedes-Benz GLA");
    let hondaObj = new Honda("Honda City")

    mercObj.run();  // A Mercedes started A Mercedes-Benz GLA is moving at 150 mph!
    hondaObj.run(); // A Honda started A Honda City is moving at 100 mph!

    /*
    Clases Abstractas
     */
    abstract class Person2 {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        display(): void{
            console.log(this.name);
        }

        abstract find(name: string): Person;
    }

    class Employee4 extends Person2 {
        empCode: number;

        constructor(name: string, code: number) {
            super(name); // must call super()
            this.empCode = code;
        }

        find(name:string): Person {
            // execute AJAX request to find an employee from a db
            return new Employee4(name, 1);
        }
    }

    let emp4: Person2 = new Employee4("James", 100);
    emp4.display(); //James

    let emp2: Person = emp4.find('Steve');

    /*
    Modificadores de acceso
     */
    class Employee5 {
        public empName: string;
        protected empCode: number;

        constructor(name: string, code: number){
            this.empName = name;
            this.empCode = code;
        }
    }

    class SalesEmployee extends Employee5{
        private department: string;

        constructor(name: string, code: number, department: string) {
            super(name, code);
            this.department = department;
        }
    }

    let emp5 = new SalesEmployee("John Smith", 123, "Sales");


    class Employee6 {
        readonly empCode: number;
        empName: string;

        constructor(code: number, name: string)     {
            this.empCode = code;
            this.empName = name;
        }
    }
    let emp6 = new Employee6(10, "John");

    /*
    Miembros estáticos
     */
    class Circle {
        static pi: number = 3.14;

        static calculateArea(radius:number) {
            return this.pi * radius * radius;
        }
    }
    Circle.pi; // returns 3.14
    Circle.calculateArea(5); // returns 78.5
}
