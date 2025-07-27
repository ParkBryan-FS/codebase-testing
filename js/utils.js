// sumOfArray function
 function sumOfArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum+= num;
    }
    return sum;
 }

//  findMax function
function findMax(arr) {
    if (arr.length === 0) return undefined;
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

// purgeDuplicates function
function purgeDuplicates(arr) {
    const unique = [];
    for (let item of arr) {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    }
    return unique;
}

// countVowels(str) function
function countVowels(str) {
    let count = 0;
    const vowels = `aeiouAEIOU`;
    for (let char of str) {
        if(vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

module.exports = {
    sumOfArray,
    findMax,
    purgeDuplicates,
    countVowels
}