// Hoisting

// d=4;
// console.log(d);
// var d; d=3;
// console.log(foo); // undefined
// var foo = 123;


function games() {
    console.log(cricket);
  }
  var cricket=10;
  games();
  // let and const
  
  // d, var d, let d, const d
  
  // Scope
  // Local scope
  // Global scope
  // Function scope
  // Block scope
  
  var a =5; //Global Scope
  function data () {
    // Local scope
  }
  
  {
   // Block scope is a kind of local scope
  }
  
  
  // beta = 4;
  // function name () {
  //   var beta = 5;
  // }
  
  // console.log(beta); // throws error
  
  // Lexical environment
  
  // Temporal Dead Zone
  
  // let age = 50;
  
  
  // function printAge() {
  //   console.log(age);
  //   let age = 30;
  // }
  
  // printAge(); // Error
  