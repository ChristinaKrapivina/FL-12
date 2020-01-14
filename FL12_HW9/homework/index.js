//Magic Numbers Fix
const one = 1;
const two = 2;
const three = 3;
const five = 5;
const seven = 7;
const eight = 8;
const fourteen = 14;
const twentyNine = 29;
const thirty = 30;
const thirtyOne = thirty + one;
const fourtyEight = 48;
const fiftyEight = 58;
const yearDays = 365;
const twentyNineteen = 2019;

function convert() { 
    let result = [];
    for (let value of arguments) {
        if(typeof value === 'string') { 
            result.push(Number(value));
        } else {
            result.push(String(value));
        }
    }
    return result;
}
convert('1', two, three, '4');

function executeforEach(arrayArg, functionArg){
    for (let item of arrayArg) {
        functionArg(item);
    }
}
executeforEach([1,two,three], function(el) {
    console.log(el * two) 
})

function mapArray(arrayArg, functionArg){
    let result = [];
    executeforEach(arrayArg, item => {
        if(typeof item === 'string') {
            item = Number(item);
        }
        result.push(functionArg(item));
    });
    return result;
}
mapArray([two, '5', eight], function(el) {
    return el + three
});

function filterArray(arrayArg, functionArg){
    let result = [];
    executeforEach(arrayArg, item => {
        if(functionArg(item)) {
            result.push(item);
        }
    });
    return result;
}
filterArray([two, five, eight], function(el) { 
    return el % two === 0 
});

function flipOver(argument){ 
    let result = '';
    for(let i = argument.length - 1; i >= 0; i--) {
        result += argument[i];
    }
    return result;
}
flipOver('hey world');

function makeListFromRange(argument){
    let result = [];
    for (let i = argument[0]; i <= argument[1]; i++) {
        result.push(i);
    }
    return result;
}
makeListFromRange([two, seven]);

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
function getArrayOfKeys(arrayOfObj, keyName) {
    let result = [];
    executeforEach(arrayOfObj, item => {
        result.push(item[keyName]);
    });  
    return result;
}
getArrayOfKeys(actors, 'name');

function substitute(arrayOfNumbers) {
    let result = [];
    mapArray(arrayOfNumbers, item => {
        if(item < thirty) {
            item = '*';
        }
        result.push(item);
    })
    return result;
}
substitute([fiftyEight, fourteen, fourtyEight, two, thirtyOne, twentyNine]); 

const date = new Date(twentyNineteen, 0, two);
function getPastDay(dateArgument, daysPassed){ 
    let i = new Date(dateArgument);
    i.setDate(i.getDate() - daysPassed);
    return i.getDate();
}
getPastDay(date, 1); 
getPastDay(date, two); 
getPastDay(date, yearDays); 

function formatDate(dateArgument){ 
    let result = dateArgument.getFullYear() + '/' + (dateArgument.getMonth() + 1) + '/' + dateArgument.getDate() + 
    ' ' + dateArgument.getHours() + ':' + dateArgument.getMinutes();
    return result;
}
formatDate(new Date('6/15/2018 09:15:00')) 
formatDate(new Date())
