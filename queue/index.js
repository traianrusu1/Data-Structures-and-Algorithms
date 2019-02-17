// a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.q = [];
  }

  add(val) {
    this.q.unshift(val);
  }

  remove() {
    if (this.q.length > 0) {
      return this.q.pop();
    }
  }
}

module.exports = Queue;
