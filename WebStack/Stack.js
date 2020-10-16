export class Stack {
	constructor() {
		this.items = [];
		this.top = 0;
	}

	push(data) {
		this.top++;
		this.items[this.top] = data;
	};

	pop() {
		let deleteData;

		if(this.top){
			deleteData = this.items[this.top];
			delete this.items[this.top];
			this.top--;
			return deleteData;
		}
	}

	getSize(){
		return this.top;
	};

	isEmpty() {
		if(!this.getSize()){
			return true;
		} else {
			return false;
		}
	};

	peek() {
		if (this.isEmpty()) {
			return null;
		};

		return this.itmes[this.top];
	};

	print() {
		let result = '';
		for (let i = this.top; i > 0; i--) {
			result += this.items[i] + ' '
		};

		return result;
	}

}


