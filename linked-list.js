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

    while ((currNode !== undefined) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === undefined) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(item, target){
    let currNode = this.head;
    let previousNode = this.head;
    let currTarget = 0;
    let newNode = new _Node(item);
    
    if(target === 0){
      newNode.next = currNode;
      this.head = newNode;
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
    let currTarget = 0;
    let newNode = new _Node(item);
    
    // if(currTarget > 0){
    //   newNode.next = currNode;
    //   this.head = newNode
    // }
    
    while(currTarget < target){
      currTarget++;
      currNode = currNode.next;
    }
    newNode.next = currNode.next;
    currNode.next = newNode;
  }

  insertAt(item, target){
    let currNode = this.head;
    let previousNode = this.head;
    let currTarget = 0;
    let newNode = new _Node(item);

    while (currTarget < target){
      currTarget++;
      previousNode = currNode;
      currNode = currNode.next;
    }

    previousNode.next = newNode;
    newNode.next = currNode;

  }

  insert(item){
    let currNode = this.head;
    let newNode = new _Node(item);
    if(this.head === null){
      this.head = newNode;
    }
    else{
      while(currNode.next){
        currNode = currNode.next;
      }
      currNode.next = newNode;
    }
  }
}  

//Q3: Supplemental functions for a linked list
function display(list){
  let result = JSON.stringify(list); 
  return result; 
}

function size(list){
  let currNode = list.head;
  let size = 0;
  while(currNode !== undefined){
    currNode = currNode.next;
    size++;
  }
  return size; 
}

function isEmpty(list){
  if(list.head === undefined){
    return console.log('is empty');
  }
  return console.log('list present'); 
}

function findPrevious(list, item){
  let currNode = list.head;
  let previousNode = list.head;
  //let counter = 0;
  let result;

  while(currNode.value !== item){
    previousNode = currNode;
    currNode = currNode.next;
  }
  result = previousNode.value;
  return console.log(result);
}

function findLast(list){
  let currNode = list.head;
  let previousNode = list.head;
  while(currNode !== undefined){
    previousNode = currNode;
    currNode = currNode.next;
  }
  return console.log(previousNode.value);
}

function main(){
  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insert('Boomer');
  SLL.insert('Helo');
  SLL.insert('Husker');
  SLL.insert('Starbuck');
  SLL.insert('Tauhida');
  SLL.remove('squirrel');
  SLL.insertBefore('Athena', 1);
  SLL.insertAfter('Hotdog', 3);
  SLL.insertAt('Kat', 2);
  SLL.remove('Tauhida');
  console.log(size(SLL));
  console.log(display(SLL));
  isEmpty(SLL);
  findPrevious(SLL, 'Boomer');
  findLast(SLL);
}
//console.log(JSON.stringify(main()));
main();
