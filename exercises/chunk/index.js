// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {}

// chunk([1,2,3], 2);

// let len = array.length;
//   let newArr = [];
//   let numOfSubarr = Math.round(len/size);

//   for(let i = 0; i < numOfSubarr; i++) {
//   let newSubarr = [];
//     for(let j = 0; j < size; j++) {
//       // debugger;
//       if(array[size*i + j] !== undefined) {
//       	newSubarr.push(array[size*i + j]);
//       }
//     }
//     newArr.push(newSubarr);
//   }

//   return newArr;

function chunk(array, size) {
    let mainArr = [];

    for (let element of array) {
        const last = mainArr[mainArr.length - 1];

        if (!last || last.length === size) {
            mainArr.push([element]);
        } else {
            last.push(element);
        }
    }
    return mainArr;
}

chunk([1, 2, 3, 4, 5], 2);

module.exports = chunk;
