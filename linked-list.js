'use strict';
class _Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(){ 
    this.head = null;
  }

  insertFirst(item) {
      this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
        this.insertFirst(item);
    }
    else {
        let tempNode = this.head;
        while (tempNode.next !== null) { 
            tempNode = tempNode.next; 
        }
        tempNode.next = new _Node(item, null); 
    }
  }

  find(item) { 
    let currNode = this.head;
    if (!this.head) {
        return null;
    }
    while (currNode.value !== item) {
        if (currNode.next === null) {
            return null;
        }
        else {
            currNode = currNode.next;
        }
    }
    return currNode;
  }

  remove(item){ 
    if (!this.head) {
        return null;
    }
    if (this.head.value === item) {
        this.head = this.head.next;
        return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
        previousNode = currNode;
        currNode = currNode.next;
    }
    if (currNode === null) {
        console.log('Item not found');
        return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(item, target){
    let currNode = this.head;
    let previousNode = this.head;
    let currTarget = 0;
    let newNode = new _Node(item)
    
    if(currTarget === 0){
      newNode.next = currNode;
      this.head = newNode
    }
    
    else while(currTarget < target){
      currTarget++;
      previousNode = currNode;
      currNode = currNode.next;
    }
    newNode.next = currNode;
    previousNode.next = newNode;
  }

  insertAfter(item, target){
    let currNode = this.head;
    let previousNode = this.head;
    let currTarget = 0;
    let newNode = new _Node(item)
    
    if(currTarget > 0){
      newNode.next = currNode;
      this.head = newNode
    }
    
    else while(currTarget > target){
      currTarget++;
      previousNode = currNode;
      currNode = currNode.next;
    }
    newNode.next = currNode;
    previousNode.next = newNode;
  }

  insertAt(item, target){
    let currNode = this.head;
    let previousNode = this.head;
    let currTarget = 0;
    let newNode = new _Node(item)

    for(let i = 0; i < target - 1; i++){
      previousNode = currNode;
      currNode = currNode.next;
      if(currTarget === 0){
        newNode.next = currNode;
        this.head = newNode;
      }
    }
  }

  insert(item){
    let currNode = this.head;
    let newNode = new _Node(item, currNode.next);
    if(this.head === null){
      this.head = newNode;
    }
    else{
      currNode = this.head;
      while(currNode.next){
        currNode = currNode.next;
      }
      currNode.next = newNode;
    }
  }
}  

function main(){
    let SLL = new LinkedList();
    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    // SLL.insert('Husker');
    // SLL.insert('Starbuck');
    // SLL.insert('Tauhida');
    // SLL.remove('squirrel');
    // SLL.insertBefore('Athena', 2);
    // SLL.insertAfter('Hotdog', 3);
    // SLL.insertAt('Kat', 3);
    // SLL.remove('Tauhida');
    return SLL;
  }

console.log(main());