function isLeapYear(dateArg) {
    if(typeof dateArg === "string") {
        dateArg = dateArg.replace(/\s/g, "T");
    }
    let date = new Date(dateArg);

    if(isNaN(date)){
        return "Invalid Date";
    } else {
        let year = date.getFullYear();
        let isLeapYear = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);

        return isLeapYear ? `${year} is a leap year` : `${year} is not a leap year`;
    } 
}

isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2020-01-01 00:00:00');
isLeapYear('2200-01-15 13:00:00');
isLeapYear(1213131313135465656654564646542132132131);
isLeapYear(1213131313);