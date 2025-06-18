// let str = "Shubham";

// let newSet = new Set(str)

// if (newSet.has('S')) {
//   console.log("Set contains 'S'");
// }

// // console.log(newSet); // Output: Set { 'S', 'h', 'u', 'b', 'a', 'm' }

// let newMap = new Map();
// newMap.set("Name", newSet);


// // newMap.keys().forEach((key) => {
// //     console.log(key); // Output: Name, S, Shubham
// //     })


// // newMap.values().forEach((value) => {
// //     console.log(value); // Output: Set { 'S', 'h', 'u', 'b', 'a', 'm' }
// // });

// // newMap.entries();

// newMap.clear(); // This will clear the map
// arr = [
//   {name:"apples", quantity:100},
//     {name:"pears", quantity:300},
//     {name:"grapes", quantity:250},
//     {name:"mangoes", quantity:400},
// ]

// function myCallback({ quantity }) {
//   return quantity > 200 ? "ok" : "low";
// }

// // Group by Quantity
// const result = Map.groupBy(arr, myCallback);

// console.log(result); // Output: Map { 'ok' => [ { name: 'pears', quantity: 300 }, { name: 'grapes', quantity: 250 }, { name: 'mangoes', quantity: 400 } ], 'low' => [ { name: 'apples', quantity: 100 } ] }

// const letters = new Set(["a","b","c"]);

// // List all Elements
// let text = "";
// for (const x of letters) {
//   text += x;
// }

// console.log(text); // Output: abc

const test = (s, t) => {
  let found = s.search(t);
  console.log(found); // Output: -1 if not found, index of first occurrence if found
  return found === -1 ? -1 : found + t.length;
}

test("sadbutsad", "sad"); // Output: 6