
export function variables(){
    console.log("Módulo Variables");
    let inmutable= 2;
    console.log("Inmutable: " + inmutable);
    var mutable= 2;
    console.log("Mutable: " + mutable);
    mutable += 1;
    console.log("Mutable: " + mutable);

    let ciudades:string[]= ["cuenca", "salamanca"];

    console.log("Ciudad [0]: " + ciudades[0]);

    enum Color{
        Verde, Rojo, Azul
    }
    let color: Color= Color.Azul;

    console.log("color: "+ color);

    var variable:any;
    let listado:any[] = [1, "hola"];
    console.log("Lsitado [1]: "+ listado[1]);

    function hazAlgo(): void{
        console.log("Algo");
    }
    hazAlgo();
}



