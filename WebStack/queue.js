export class Queue {
  constructor () {
    this.items = []
  }
  enqueue (data) {
    this.items.push(data)
  }
  dequeue () {
    return this.items.shift() || null
  }
  getSize () {
    return this.items.length
  }
  isEmpty () {
    return this.items.length === 0
  }
  peek () {
    return this.items[0] || null
  }
  print () {
    return this.items
  }
}