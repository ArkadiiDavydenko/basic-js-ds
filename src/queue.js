const { NotImplementedError } = require('../extensions/index.js');
const {ListNode} = require("../extensions/list-node");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }


  getUnderlyingList() {
    if (!this.head) {
      return null;
    }
    return this.head;
  }

  enqueue(value) {
    if (!this.head) {
      this.head = new ListNode(value);
      this.tail = this.head;
    }
    else {
      this.tail.next = new ListNode(value);
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    let getElement = this.head.value;
    this.head = this.head.next;
    return getElement;
  }

}

module.exports = {
  Queue
};

