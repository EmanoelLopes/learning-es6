//Hoisting

function gimmeAValue(condition) {
  var value;

  if(condition) {
    value = 'blue';
    return value;
  } else {
    return null;
  }

}

console.log(gimmeAValue(true));
