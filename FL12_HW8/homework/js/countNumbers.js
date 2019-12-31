function countNumbers(argument) {
    let numberArray = argument.match(/\d/g);
    let numberObject = {};

    if (numberArray) {
        for(let i = 0; i < numberArray.length; i++){
            if(numberObject[numberArray[i]]) {
                numberObject[numberArray[i]] += 1;
            } else {
                numberObject[numberArray[i]] = 1;
            }
        }
    }
    return numberObject;
}

countNumbers('erer384jj4444666888jfd123');