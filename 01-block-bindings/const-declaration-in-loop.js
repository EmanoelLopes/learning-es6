/* Const Declarations in Loops */

'use strict';

var funcs = [];

for(const i = 0; i < 10; i++) {
  funcs.push(function(){
    console.log(i);
  });
}

funcs.forEach(function(func){
  func();
}); // Throw an Error why you are trying to assign a new value to a constant

/*
 *  for(const i = 0; i < 10; i++) {
 *  TypeError: Assignment to constant variable.
 */




