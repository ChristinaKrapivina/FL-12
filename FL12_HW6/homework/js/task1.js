var a = Number(prompt("Please enter value 'a' for quadratic equation:"));
var b = Number(prompt("Please enter value 'b' for quadratic equation:"));
var c = Number(prompt("Please enter value 'c' for quadratic equation:"));

if (isNaN(a) | a == 0 | isNaN(b) | isNaN(c)) {
    console.log("Invalid input data");
}
else {
    var discrim = (b * b) - (4 * a * c);

    if (discrim < 0) {
        console.log("There are no solutions to this problem");
    }
    else if (discrim == 0) {
        x = - (b / (2* a));
        console.log("x1 = x2 = " + x + ".");
    }
    else if (discrim > 0) {
        x1 = (-b + Math.sqrt(discrim)) / (2 * a);
        x2 = (-b - Math.sqrt(discrim)) / (2 * a);
        console.log("x1 = " + x1 + " and x2 = " + x2 + ".");
    }
}

