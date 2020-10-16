class Stack {
	constructor() {
		this.stack = [];
	}

	push(element) {
		this.stack.push(element);
		return this.stack;
	}

	pop() {
		return this.stack.pop();
	}

	peek() {
		return this.stack [this.stack.length -1];
	}

	size(){
		return this.stack.length;
	}

	print(){
		console.log(this.stack)
	}
}

const stack = new Stack();
stack.size();
stack.push("Plato 1");
stack.push("Plato 2");
stack.size(); // 2
stack.print(); // [Plato 1, Plato 2]
stack.peek(); // Plato 2
stack.pop(); // Plato 2
stack.size(); // Plato 1
