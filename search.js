let arr = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

for (let i = 0; i < 1000000; i++ ) {
    arr.push(i);
}

function binarySearch(left, right, num) {
    if (left <= right) {
    let mid = Math.floor((left+right)/2);
    if(arr[mid] === num) {
        //console.log(mid);
        return mid;
    } else if(arr[mid] < num) {
        return binarySearch(mid+1, right, num);
    } else {
        return binarySearch(left, mid-1, num);
    }
} else {
    return -1;
}

}
console.log(binarySearch(0,999999,23423424));