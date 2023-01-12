function myExpect(input) {
// your code here
return {
    toBe: (this.input) => input,
    not:{
      toBe: (this.input) => input
    }
  }
}

myExpect(3).toBe(3);
// expect(3).not.toBe(3) 



// console.log(d);
// d=4;
// var d; d=3;
// a();
// console.log(a); // undefined
// var foo = 123;
// function a (num) {
//     console.log(d);
//     var d=6;
//     console.log("a value");
//     flag();
// }


// d = undefined
// a = f{..}

// getName();
// console.log(x);

// var x = 7;

// function getName(num){
//     console.log("Hello from GetName")
// }
