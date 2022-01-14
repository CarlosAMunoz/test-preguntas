
var formuladas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var respondido = [20, 50, 6];


for(let i=0; i<= 10; i++) {

    if (respondido.some(word => word === formuladas[i])){
        console.log("Ya existe")
    }
}