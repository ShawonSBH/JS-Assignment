let set = [2,3,4,6,9,19,21];
let sum = 51;
let n = set.length;

const subsetSumExists = (set,n,sum) => {
    if(sum===0) {
        return true;
    }
    if(n===0) {
        return false;
    }

    if(set[n-1] > sum) {
        return subsetSumExists(set, n-1, sum);
    }

    return subsetSumExists(set, n-1, sum) || subsetSumExists(set, n-1, sum-set[n-1]);
}

subsetSumExists(set,n,sum) ? console.log("Subset Sum Exists") : console.log("No Subset exists for such sum");