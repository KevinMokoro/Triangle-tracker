function triangle() {
  // return type of tringle //
  var sides = []
  var a = parseInt(document.getElementById('a').value);
  var b = parseInt(document.getElementById('b').value);
  var c = parseInt(document.getElementById('c').value);
  var display = document.getElementById("display");
  sides.push(a);
  sides.push(b);
  sides.push(c);
  if (a === b && b === c && c === a) {
    display.innerHTML = "equilateral triangle";
  } else if ((a + b === c || b + c === a || a + c === b) || (a + b < c || b + c < a || a + c < b)) {
    display.innerHTML = "Not a triangle";
  } else if (a === b || b === c || a === c) {
    display.innerHTML = "isosceles triangle";

  } else if ((a + b > c || a + c > b || b + c > a) && (a !== b || b !== c || c !== a)) {
    display.innerHTML = "scalene triangle";
  }
  else {
    display.innerHTML = "no values entered";
  }
}
