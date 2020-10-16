const stack = new Stack();
console.log(stack.size());
console.log(stack.push("Adrian Martinez"));
console.log(stack.push("Josue"));
console.log(stack.size()); // 2
stack.print(); // [Adrian Martinez, Josue]
console.log(stack.peek()); // Josue
console.log(stack.pop()); // Josue
console.log(stack.size()); // Adrian Martinez
