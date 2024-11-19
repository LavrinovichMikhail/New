
function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    for(let i = 0; i < arr1.length; i++) {
        sum += arr1[i] + arr2[i];
    }
    return sum; //something went wrong
  }

  let arr1 = [10, 2], arr2 = [11, 4];
console.log(arrayPlusArray(arr1,arr2));
console.log(arr1.length);