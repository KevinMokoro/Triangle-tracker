function triangle() {
  var a = parseInt(document.getElementById('a').value);
  var b = parseInt(document.getElementById('b').value);
  var c = parseInt(document.getElementById('c').value);
  if (a > 0 && b > 0 && c > 0) {
    if (a === b && b === c && c === a) {
      alert("equilateral triangle");
    } else if ((a + b === c || b + c === a || a + c === b) || (a + b < c || b + c < a || a + c < b)) {
      alert("Not a triangle");
    } else if (a === b || b === c || a === c) {
      alert("isosceles triangle");

    } else if ((a + b > c || a + c > b || b + c > a) && (a !== b || b !== c || c !== a)) {
      alert("scalene triangle");
    }
  } else {
    alert("no values entered");
  }
}

function refresh() {
  location.reload();
}
