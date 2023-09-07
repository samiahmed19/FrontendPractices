// 7 - Find the average  in the given array

var arr=[1,2,3,4,5,6,7,8,9,10];
var sum=0;
var n=arr.length;
for(var i=0;i<n;i++)
{
    sum=sum+arr[i];
}
var avg=(sum/n);
console.log(avg);