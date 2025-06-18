// add a method remove() to the linked list that deletes a node to the specified index.

class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null
      }
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    // prependM(value){
    //     let newNode = {
    //         value: value,
    //         next: null
    //     }
    //     let current = this.head;
    //     this.head = newNode;
    //     this.head.next =  current;
    //     this.length++;

    //     //return this;

    // }

    prepend(value) {
      const newNode = {
        value: value,
        next: null
      }
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      return array;
    }
    insert(index, value){
      //Check for proper parameters;
      if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }
      
      const newNode = {
        value: value,
        next: null
      }
      const leader = this.traverseToIndex(index-1);
      const holdingPointer = leader.next;
      leader.next = newNode;
      newNode.next = holdingPointer;
      this.length++;
      return this.printList();
    }
    traverseToIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
      // Check Parameters      
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
      this.length--;
      return this.printList();
    }

    // remove(index){
         
    //     let previous =  this.traverseIndex(index-1); //10
    //     let current = previous.next;//2
    //     let nextVal = current.next;//5
    //     previous.next = nextVal;
    //     this.length--;
    //     return this.printList();
  
    //   }

    reverse(){

        let first = this.head;//1
        this.tail = this.head;
        let second = first.next;//10
        while(second){
            let temp = second.next;//5
            second.next = first // 1
            first = second;
            second = temp;      

        }
        this.head.next= null;
        this.head = first;

        return this

    }

    reverse2(head){

        let node = head;
        let prev = null;

        while(node){
            //save next or you lose it

            let save = node.next;

            //reverse pointer 
            node.next = prev;

            //increment previous to current node
            prev= node;

             // increment node to next node or null at end of list
             node = save;
        }

        return prev;

    }
    reverse3(head){

        let curr = head; 
        let prev = null;
        let nextTemp = null;

        while(curr !== null){ 
          nextTemp = curr.next;  // curr        prev        nextTemp      curr.next
          curr.next = prev;      //  2           1             2            null
          prev = curr;           //  3           2             3             1
          curr = nextTemp;       //  4            3             4             2

        }

        return prev;

    }
    
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
//   myLinkedList.insert(2, 99);
//   myLinkedList.insert(20, 88);
  //myLinkedList.remove(2);
  console.log((myLinkedList.printList()));
  myLinkedList.reverse();
  console.log((myLinkedList.printList()));
  myLinkedList.reverse2();
  //reverse2(myLinkedList);
  console.log((myLinkedList.printList()));
  