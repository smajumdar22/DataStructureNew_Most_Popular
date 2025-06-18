// class DoublyLinkedList {
//     constructor(value) {
//       this.head = {
//         value: value,
//         next: null,
//         prev: null
//       };
//       this.tail = this.head;
//       this.length = 1;
//     }
//     append(value) {
//       const newNode = {
//         value: value,
//         next: null,
//         prev: null
//       }
//       console.log(newNode)
//       newNode.prev = this.tail
//       this.tail.next = newNode;
//       this.tail = newNode;
//       this.length++;
//       return this;
//     }
//     prepend(value) {
//       const newNode = {
//         value: value,
//         next: null,
//         prev: null
//       }
//       newNode.next = this.head;
//       this.head.prev = newNode
//       this.head = newNode;
//       this.length++;
//       return this;
//     }
//     printList() {
//       const array = [];
//       let currentNode = this.head;
//       while(currentNode !== null){
//         array.push(currentNode.value)
//         currentNode = currentNode.next
//       }
//       return array;
//     }
//     insert(index, value){
//       //Check for proper parameters;
//       if(index >= this.length) {
//         return this.append(value);
//       }
      
//       const newNode = {
//         value: value,
//         next: null,
//         prev: null
//       }
//       const leader = this.traverseToIndex(index-1);
//       const follower = leader.next;
//       leader.next = newNode;
//       newNode.prev = leader;
//       newNode.next = follower;
//       follower.prev = newNode;
//       this.length++;
//       console.log(this)
//       return this.printList();
//     }
//     remove(index){
         
//         let previous =  this.traverseIndex(index-1); //10
//         let current = previous.next;//2
//         let nextVal = current.next;//5
//         previous.next = nextVal;
//         nextVal.prev = previous;
//         this.length--;
//         return this.printList();
  
//       }
//     traverseToIndex(index) {
//       //Check parameters
//       let counter = 0;
//       let currentNode = this.head;
//       while(counter !== index){
//         currentNode = currentNode.next;
//         counter++;
//       }
//       return currentNode;
//     }

//     reverse(){
//       if(!this.head.next){
//         return this.head
//       }
//        let first = this.head;
//        this.tail = this.head;
//        let second = this.head.next;
//        while(second){
//          let temp = second.next;
//          second.next = first;
//          first = second;
//          second = temp;
//        }
//        this.head.next = null;
//        this.head = first;
//     }
  
//   }

// //   class DoublyLinkedList {
// //     constructor(value) {
// //         this.head = {
// //             value: value,
// //             next: null,
// //             prev: null
// //         },
// //             this.tail = this.head,
// //             this.length = 1
// //     }
// //     append(value) {
// //        let newNode = {
// //            value: value,
// //            next: null,
// //            prev: null
// //        }
// //        newNode.prev = this.tail;
// //        this.tail.next = newNode;
// //        this.tail =  newNode;
// //        this.length++;
// //        return this;
// //     }

// //     prependM(value){
// //         let newNode = {
// //             value: value,
// //             next: null
// //         }
// //         let current = this.head;
// //         this.head = newNode;
// //         this.head.next =  current;
// //         this.length++;

// //         //return this;

// //     }

// //     prepend(value){
// //         let newNode = {
// //             value: value,
// //             next: null,
// //             prev: null
// //         }

// //         newNode.next = this.head;
// //         this.head = newNode;
// //         newNode.prev = null;
// //         this.length++;

// //         //return this;

// //     }

// //     printList(){
// //         let arr = [];
// //         let current = this.head;
// //         while(current !== null){
// //             arr.push(current.value);
// //             current = current.next;
// //         }
// //         return arr;
// //     }
// //     insert(index, value){

// //         if(index >= this.length){
// //             return this.append(value);
// //         }
       
// //         let newNode = {
// //             value: value,
// //             next: null,
// //             prev: null
// //         };

// //         let previous = this.traverseIndex(index - 1);
// //         let nextVal = previous.next;
// //         previous.next = newNode;
// //         newNode.prev = previous
// //         newNode.next = nextVal;
// //         nextVal.prev = newNode;
// //         this.length++;
// //         return this.printList();      
        
// //     }

// //     remove(index){
         
// //       let previous =  this.traverseIndex(index-1); //10
// //       let current = previous.next;//2
// //       let nextVal = current.next;//5
// //       previous.next = nextVal;
// //       nextVal.prev = previous;
// //       this.length--;
// //       return this.printList();

// //     }
// //     traverseIndex (index){
// //         let counter = 0;
// //         let current = this.head;
// //         while(counter !== index){
// //               current = current.next;
// //               counter++;
// //         }

// //         return current;
// //     }
// // }

// // let myLinkedlist = new DoublyLinkedList(10)
// // myLinkedlist.append(5);
// // myLinkedlist.append(16);
// // myLinkedlist.prepend(1);
// // myLinkedlist.insert(2,2);
// // myLinkedlist.insert(200,40);
// // myLinkedlist.remove(3)
// // console.log(myLinkedlist.printList());
  
//   let myLinkedList = new DoublyLinkedList(10);
//   //myLinkedList.append(5)
//   myLinkedList.append(16)
//   myLinkedList.prepend(1)
//   //myLinkedList.insert(2, 99)
//    myLinkedList.insert(20, 88)
//   console.log(myLinkedList.printList());
//   // myLinkedList.remove(2)
//   myLinkedList.reverse();
//   console.log(myLinkedList.printList());


  