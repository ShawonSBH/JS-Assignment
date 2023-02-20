const array1 = [1,3,4,6];
const array2 = [2,4,7,9];
const ansArray = [];

let i = 0, j = 0

for (; i < array1.length, j < array2.length;) {
    if(array1[i] < array2[j]) {
        ansArray.push(array1[i]);
        i++;
    } else {
        ansArray.push(array2[j]);
        j++;
    }
}

for ( ;i < array1.length; i++) {
    ansArray.push(array1[i]);
}

for ( ;j < array2.length; j++) {
    ansArray.push(array2[j]);
}

console.log(ansArray);