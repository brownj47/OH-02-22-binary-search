// create a binary search algorithm

const sortedArr = Array(400000).fill().map(()=>Math.round(Math.random()*2000000)).sort((a,b)=>a-b)

// sorted Array
// const sortedArr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let binCount  = 0
const loop = (left, middle, right, target, array) => {
    binCount++
    if (array[left] === target) {
        console.log(binCount)
        return left;
    }
    if (array[middle] === target) {
        console.log(binCount)
        return middle;
    }
    if (array[right] === target) {
        console.log(binCount)
        return right;
    }

    if (array[middle] < target) {
        left = middle;
        middle = Math.floor((right - left) / 2) + left;
        right--;
    }
    if (array[middle] > target) {
        right = middle;
        middle = Math.floor((right - left) / 2);
        left++;
    }

    if (left >= right) {
        console.log(binCount)
        return -1;
    }

    return loop(left, middle, right, target, array);
};

const binSearch = (target, array) => {
    let left = 0;
    let right = array.length - 1;
    let middle = Math.floor((right - left) / 2);

    console.log("INDEX OF TARGET:", loop(left, middle, right, target, array));
};

console.log(sortedArr);
binSearch(400, sortedArr);

const linSearch = (target, array) =>{
    let count = 0
    for (let i = 0; i < array.length; i++) {
        count++
        const element = array[i];

        if (element === target){
            console.log(count)
            return i
        }
    }
    console.log(count)
    return -1
}

console.log(linSearch(20000, sortedArr))
