function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }


  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);


  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);


  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const mergedArray = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      mergedArray.push(left.shift());
    } else {
      mergedArray.push(right.shift());
    }
  }

  return mergedArray.concat(left).concat(right);
}



const array = [5, 3, 2, 1, 4];
const sortedArray = mergeSort(array);

console.log(sortedArray); // [1, 2, 3, 4, 5]
