const romanValues =
{
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

/**
 * This fuction provide the functionality to convert roman numbers into integer.
 * Returns the representation integer number of the given roman number
 * @param  {String} romanNumber The roman number which is going to be converted to integer.
 */
const romanToInteger = (roman) => {

    validate(roman);

    romanUpper = roman.toUpperCase();
    let romanAsInteger = 0;
    for (let i = 0; i < romanUpper.length; i++) {
        const current = romanUpper[i];
        const value = romanValues[current];
        
        if (i + 1 < romanUpper.length && romanValues[romanUpper[i + 1]] > value) {
            romanAsInteger -= value;
        }
        else { romanAsInteger += value; }
    }
    return romanAsInteger;
}

const validate = (roman)=>{
    console.log(romanValues);
    if(!roman){
        throw Error("The parameter value provided is not valid")
    }
    romanUpper = roman.toUpperCase();
    for(let i = 0; i < romanUpper.length; i++){
        if(!romanValues[roman[i]]){
            throw Error(`Invalid roman number "${roman[i]}", the valid roman numbers are ${JSON.stringify(romanValues)}`);
        }
    }
}

module.exports = {romanToInteger};