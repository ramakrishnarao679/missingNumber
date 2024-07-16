function findMissingNumber (arr){
    let n =arr.length+1;
    const expectedSum = (n*(n+1))/2;
    const actualSum = arr.reduce((acc, val)=> acc + val ,0);
    return expectedSum-actualSum;
}
console.log(findMissingNumber([1,2,3,5,6,7]));