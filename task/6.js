// 6 - Find the smallest number in the given array
var arr=[1,2,3,4,500,6,-7,8,9,90];
var smallest=arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest)
    smallest = arr[i];
}
console.log(smallest);