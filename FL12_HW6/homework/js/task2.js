let a = Number(prompt('Please enter the length of the first side of the triangle:'));
let b = Number(prompt('Please enter the length of the second side of the triangle:'));
let c = Number(prompt('Please enter the length of the third side of the triangle:'));

if (
    a === 0 || isNaN(a) || 
    b === 0 || isNaN(b) ||
    c === 0 || isNaN(c)
    ) {
    alert('Input values should be ONLY numbers');
} else if (a === 0 || b === 0 || c === 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if (a + b < c || b + c < a || c + a < b) {
    alert('Triangle doesn\'t exist');
} else {
    if (a === b && b === c && a === c) {
        console.log('Equilateral triangle');
    } else if (a === b && a !== c || b === c && b !== a || a === c && a !== b) {
        console.log('Isosceles triangle');
    } else if (a !== b && b !== c && a !== c) {
        console.log('Scalene triangle');
    }
}
