let a = Number(prompt('Please enter value \'a\' for quadratic equation:'));
let b = Number(prompt('Please enter value \'b\' for quadratic equation:'));
let c = Number(prompt('Please enter value \'c\' for quadratic equation:'));

if (isNaN(a) || a === 0 || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data'); 
} else {
    const four = 4;
    const two = 2;
    let discrim = b * b - four * a * c;
    let denominator = two * a;

    if (discrim < 0) {
        console.log('There are no solutions to this problem'); 
    } else if (discrim === 0) {
        let x = - (b / denominator);
        console.log('x1 = x2 = ' + x + '.'); 
    } else if (discrim > 0) {
        let x1 = (-b + Math.sqrt(discrim)) / denominator;
        let x2 = (-b - Math.sqrt(discrim)) / denominator;
        console.log('x1 = ' + x1 + ' and x2 = ' + x2 + '.'); 
    } 
}

