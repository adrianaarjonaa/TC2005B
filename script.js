console.log("Hola mundo!");

const colores = ["rojo", "azul"];
console.log(colores[0]);
colores[0] = 523;
console.log(colores[0]);
colores[2] = 22;

let alumno = {nombre: "Juan", edad: 22, imprime(){
    console.log(this.nombre + " " + this.edad);
    },
};
alumno.imprime();
alumno["edad"]++;

function fun2(){
    console.log("Hola 2");
}

const funcion = (name) => {
    console.log("Hola " + name);
}
funcion("Juan");