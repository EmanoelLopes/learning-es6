/* Const for in Loops */

'use strict';

var funcs = [];
var object = {
  a: true,
  b: true,
  c: true
};

for(const key in object) {
  funcs.push(function(){
    console.log(object[key]);
  });
}

funcs.forEach(function(func){
  func();
});


