export function funciones() {
    console.log("Módulo Funciones");
    function Sum(x: number, y: number) : number {
        return x + y;
    }

    let suma = Sum(2,3); // returns 5
    console.log("Suma: "+ suma);
    /*
        Parámetros opcionales
     */
    function Greet(greeting: string, name?: string ) : string {
        return greeting + ' ' + name + '!';
    }

    console.log(Greet('Hola','Pepe'));//OK, returns "Hola Pepe!"
    console.log(Greet('Hi')); // OK, returns "Hi undefined!".

    function Greet2(greeting: string, name: string = "Pepe" ) : string {
        return greeting + ' ' + name + '!'
    }
    console.log(Greet2('Hola','Pepe'));//OK, returns "Hello Steve!"
    console.log(Greet2('Hi')); // OK, returns "Hi Pepe!".

    /*
    Parámetros rest (infinitos)
     */
    function Greet3(greeting: string, ...names: string[]) {
        return greeting + " " + names.join(", ") + "!";
    }
    Greet3("Hello", "Steve", "Bill", "Pepe"); // returns "Hello Steve, Bill, Pepe!"
    Greet3("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"

    Greet3("Hello");// returns "Hello !"
    /*
    Arrow Function
     */
    let sum = (x: number, y: number): number => {
        return x + y;
    };

    var ret=sum(10, 20); //returns 30

    console.log("Suma: "+ ret);

    let Print = () => console.log("Hello TypeScript");

    Print(); //Output: Hello TypeScript

    /*
    Sobre carga de funciones
     */
    function add(a:string, b:string):string;

    function add(a:number, b:number): number;

    function add(a: any, b:any): any {
        return a + b;
    }

    add("Hello ", "Steve"); // returns "Hello Steve"
    add(10, 20); // returns 30
}
