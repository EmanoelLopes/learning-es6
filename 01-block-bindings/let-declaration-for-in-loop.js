/* Let declaration in for in Loops */
'use strict';

var funcs = [];
var object = {
  a: true,
  b: true,
  c: true
};

for(let key in object) {
  funcs.push(function(){
    console.log(key);
  });
}

funcs.forEach(function(func){
  func();
});