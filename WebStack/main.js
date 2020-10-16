import {Stack} from './Stack.js';
import {Node, LinkedList} from './linkedList.js';
import {Queue} from './queue.js';

//Variables
const stack = new Stack();
const linkedList = new LinkedList();

//Funciones de agregar, consultar y eliminar

//Como agregar, consultar insertar y elimnar
/*
   linkedList.add -- Para agregar en la lista

   linkedList.insertAT(Dato, indice donde se quiera poner)-- Para insertar algo en la lista en caso de que se quiera incluir

   linkedList.removeData(Lo que se elimina) -- Para elimnar datos.

   linkedList.getSize() -- Obtiene el numero de indice que contiene la lista

   linkedList.print() -- Imprime lista

Pilas:

stack.push() -- Input de pila
stack.pop() -- Output de pila
Queue -- Actua de segundo plano poniendo las pilas en filas.

*/

//Menu
stack.push("Ramen");
stack.push("Carne a la plancha");
stack.push("Bacon Cheese Burger");
stack.push("Nuggets con Papitas Fritas");
stack.push("Paro Cardiaco");
stack.push("Filete Wellintong");
stack.push("Ensalada cesar");
stack.push("El Frutillero");
stack.push("Sopa de pollo");
stack.push("Carne de cerdo");
stack.push("Churrasco");
stack.push("Tacos Picantes");
stack.push("Cheesecake");
stack.push("Helado de Vainilla");
stack.push("Brownie a la moda");

stack.push("Refresco");
stack.push("Presidente");
stack.push("Vinos");
stack.push("Agua");
stack.push("Tequila");

//Platos
/*
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
*/

//Bebidas
/*
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
*/ 

//Lo que el cliente ordena
linkedList.add("Ramen");
linkedList.add("Carne a la plancha");
linkedList.insertAt(20,1);
linkedList.insertAt(10,3);

console.log(linkedList.removeData(2)); //null
console.log(linkedList.print());
console.log(linkedList.isEmpty());
console.log(linkedList.getSize());
