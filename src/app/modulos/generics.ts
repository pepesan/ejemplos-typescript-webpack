export function genericos() {
    console.log("Módulo Genéricos");

    /*
    Uso normal de funciones
     */
    function getArray(items : any[] ) : any[] {
        return new Array().concat(items);
    }

    var myNumArr = getArray([100, 200, 300]);
    var myStrArr = getArray(["Hello", "World"]);

    myNumArr.push(400); // OK
    myStrArr.push("Hello TypeScript"); // OK

    /*
    Versión genérica
     */
    function getArray2<T>(items : T[] ) : T[] {
        return new Array<T>().concat(items);
    }

    myNumArr = getArray2<number>([100, 200, 300]);
    myStrArr = getArray2<string>(["Hello", "World"]);

    myNumArr.push(400); // OK
    myStrArr.push("Hello TypeScript"); // OK

    /*
    Genéricas con dos tipos
     */
    function displayType<T, U>(id:T, name:U): void {
        console.log(typeof(id) + ", " + typeof(name));
    }

    displayType<number, string>(1, "Steve"); // number, string

    /*
    Genéricos con arrays
     */
    function displayNames<T>(names:T[]): void {
        console.log(names.join(", "));
    }

    displayNames<string>(["Steve", "Bill"]); // Steve, Bill

    /*
    Genéricas
     */
    class Person {
        firstName: string;
        lastName: string;

        constructor(fname:string,  lname:string) {
            this.firstName = fname;
            this.lastName = lname;
        }
    }

    function display<T extends Person>(per: T): void {
        console.log(`${ per.firstName} ${per.lastName}` );
    }
    var per = new Person("Bill", "Gates");
    display(per); //Output: Bill Gates

    class KeyValuePair<T,U>
    {
        // @ts-ignore
        private key: T;
        // @ts-ignore
        private val: U;

        setKeyValue(key: T, val: U): void {
            this.key = key;
            this.val = val;
        }

        display():void {
            console.log(`Key = ${this.key}, val = ${this.val}`);
        }
    }
    let kvp1 = new KeyValuePair<number, string>();
    kvp1.setKeyValue(1, "Steve");
    kvp1.display(); //Output: Key = 1, Val = Steve
}
