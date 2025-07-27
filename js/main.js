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

