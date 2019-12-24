let a = parseInt(prompt('Please enter the length of the first side of the triangle:'), 10);
let b = parseInt(prompt('Please enter the length of the second side of the triangle:'), 10);
let c = parseInt(prompt('Please enter the length of the third side of the triangle:'), 10);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('Input values should be ONLY numbers');
} else if (a === 0 || b === 0 || c === 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (a + b < c || b + c < a || c + a < b) {
    alert('Triangle doesn\'t exist');
} else {
    if (a === b && b === c) {
        console.log('Equilateral triangle');
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Scalene triangle');
    }
}
