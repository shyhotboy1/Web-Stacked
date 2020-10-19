import {Stack} from './Stack.js';
import {Node, LinkedList} from './linkedList.js';
import {Queue} from './queue.js';


//Variables
const stack = new Stack();
const linkedList = new LinkedList();

let orden_init = document.getElementById('button')

	
	function ordenes(){
    let leer = document.getElementById('orden').value
   linkedlist.add(leer);
}

function consulta(){
    let leer = document.getElementById('orden').value
	console.log(linkedlist.print(ordenes));
};

function eliminar_orden(){
    let leer = document.getElementById('orden').value
    let x = prompt("Selecciona el numero del articulo que desea eliminar")
     linkedlist.removeFrom(x);
  	//linkedlist.removeData(leer);
 
};
