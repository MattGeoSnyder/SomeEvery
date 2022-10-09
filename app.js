function hasOddNumber(arr){
    return arr.some(function(val){
        return val  % 2 === 1;
    });
}

function hasAZero(number) {
    let numStr = String(number);
    let numArr = Array.from(numStr);
    return numArr.some(function(val){
        return val === '0';
    });
}

function hasOnlyOddNumbers(arr) {
    return arr.every(function(val){
        return val % 2 === 1;
    });
}

function hasNoDuplicates(arr) {
    let count = {};

    for (let val of arr){
        if (typeof count[val] === 'undefined'){
            count[val] = 1;
        } else {
            count[val] += 1;
        }
    }

    return arr.every(function(val) {
        return count[val] === 1;
    });
}

function hasCertainKey(arr, key){
    return arr.every(function(obj){
        return Object.keys(obj).includes(key);
    });
}

function hasCertainValue(arr, key, value) {
    return arr.every(function(obj){
        return obj[key] === value;
    });
}