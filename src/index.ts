// import { Stack } from "./Stack";

// type User = {
//     name: string;
//     adress: string;
//     birthDate: Date;
// }


// const pilha = new Stack<number>();

// pilha.push(10);
// pilha.push(20);
// pilha.push(50);


// pilha.visualize();

// console.log("-------------------");

// pilha.pop();
// pilha.visualize();

// console.log(pilha.isEmpty())
// console.log(pilha.peek())


import { Queue } from "./Queue";

const fila = new Queue<number>();

fila.enqueue(10);
fila.enqueue(20);
fila.enqueue(30);
fila.enqueue(40);
fila.enqueue(50);
fila.visualize();

fila.dequeue();
fila.dequeue();
fila.dequeue();
console.log(fila.isEmpty());
console.log(fila.peek());
fila.visualize();