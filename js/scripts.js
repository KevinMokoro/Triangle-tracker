function triangle () {
// return type of tringle //
}
var a = parseInt(prompt("Enter a side length"));
var b = parseInt(prompt("Enter another side length"));
var c = parseInt(prompt("Enter the last side length"));
if (a===b && b===c && c===a){
alert("equilateral triangle");
}
else if ((a+b===c || b+c===a || a+c===b) || (a+b<c || b+c<a || a+c<b)){
alert("Not a triangle");
}
else if (a===b || b===c || a===c){
alert("isosceles triangle");
}
else if ((a+b>c || a+c>b || b+c>a)&&(a!==b || b!==c || c!==a)){
alert("scalene triangle");
}
