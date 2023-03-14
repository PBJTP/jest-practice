const analyzeArray = (arr) => {
    let average = 0;
    let sortedArray = mergeSort(arr);
    let min;
    let max;

    for (let i = 0; i < arr.length; i++) {
        average += arr[i];
    }

    return {
        average: (average / arr.length),
        min: sortedArray[0],
        max: sortedArray[arr.length - 1],
        length: arr.length
    }
}

function mergeSort(array) {
    //base case
    if (array.length < 2) return array;

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    
    //recursion
    return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right) {
    let sortedArray = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedArray.push(left.shift());
        } else {
            sortedArray.push(right.shift());
        }
    };

    return [...sortedArray, ...left, ...right];
}

console.log(analyzeArray([1,2,3,4,5]))
module.exports = analyzeArray;