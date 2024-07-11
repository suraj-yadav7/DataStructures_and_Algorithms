// 01. Find the largest element in the array
// Timecomplexity: O(n)
// Space Complexity: O(1)
function largestElementArr(arr){
    let largest=arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
    }
    console.log("Largest Element in Array is : ", largest)
}

// largestElementArr([1,5,3,2,4])

// 02. Second Largest Element in Array
// method: Brute force
function secondLargest(arr){
    let sortArr = arr.sort((a,b)=> a-b)
    let secondLargest=arr[arr.length-1]
    for(let i=arr.length-1; i>=0; i--){
        if(sortArr[i] != secondLargest){
            secondLargest=sortArr[i]
            break;
        }
    }
    console.log("second largest element in array: ", secondLargest)
}
// secondLargest([4,1,5,3,5,2])

// method: Better
// timecomplexity: O(n)+O(n)=O(2n)
// spacecomplexity
function secondLargestBetter(arr){
    let largest=arr[0]
    // largestElement
    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
    }
    let secondLarg=arr[1]
    // secondlargeElement
    for(let i=0; i<arr.length; i++){
        if(arr[i]>secondLarg && arr[i]!=largest){
            secondLarg=arr[i]
        }
    }
    console.log("Second Largest using Better Approach: ", secondLarg)
}
// secondLargestBetter([4,3,7,7,5,1,2])

// Optimal method
const secondLargestOptimal=(arr)=>{
    let largest=arr[0]
    let secondLargest=-1
    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            secondLargest=largest
            largest=arr[i]
        }
        else if(arr[i]<largest && arr[i]>secondLargest){
            secondLargest=arr[i]
        }
    }
    console.log("Second largest using optimal : ", secondLargest)
}
// secondLargestOptimal([10,4,3,8,2,9,2])

// 03.Smiliar problem: Second Smallest -optimal
const secondSmallest=(arr)=>{
    let smallest = arr[0]
    // need to take max of arry
    let secondSmallest=Math.max(...arr)
    for(let i=0; i<arr.length; i++){
        if(arr[i]<smallest){
            secondSmallest=smallest
            smallest=arr[i]
        }
        else if(arr[i] != smallest && arr[i]<secondSmallest){
            secondSmallest=arr[i]
        }
    }
    console.log("Second smallest in array: ", secondSmallest)
}
// secondSmallest([10,4,3,1,8,2,9,2]);

// 04.Check if array is sorted or not
function sortArray(arr){
    for(let i=1;i<arr.length;i++){
        if((arr[i] >=arr[i-1])){
        }
        else{
            return false
        }
    }
    return true
}
// let result = sortArray([1,2,4,7,15])
// console.log("Is array is sorted: ", result)

// 05. Remove duplicate from array
function removeduplicate(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i]==arr[j]){
                let splice=arr.splice(j,1)
                console.log("spliced: ", splice)
            }
        }
    }
    console.log("Removed duplicate elements: ", arr)
}
// removeduplicate([3,4,6,3,2,6,2,1])

// Optimal method
const removeduplicateOptimal= (arr)=>{
    let i=0
    let arrUnique=[]
    for(let j=1; j<=arr.length; j++){
        if(arr[i] != arr[j]){
            arrUnique.push(arr[i])
            i++
        }
    }
    console.log("Unique element of array is: ", i)
    console.log("unique array is: ", arrUnique)
}
// removeduplicateOptimal([3,4,6,3,2,6,2,1])

function removeDuplicate(arr){
	let i=0;
   let uniqueArr=[]
   for(let j=1; j<arr.length; j++){
		if(arr[i]!=arr[j]){
         uniqueArr.push(arr[i])
         i++
      }
	}
   console.log("Unique Array: ", uniqueArr)
   console.log("Given array: ", arr)
}
// removeDuplicate([4,1,3,1,2,4,5]);

// 06. Left rotate the array by one place
//Bruteforce: myway
function rotateArray(arr){
    let leftVal=arr[0]
    arr.shift()
    arr.push(leftVal)
    console.log("arr: ", arr)
}
rotateArray([1,2,3,4,5])

// optimal solution 
const leftRotate=(arr)=>{
    let temp=arr[0]
    let n=arr.length
    for(let i=1; i<arr.length; i++){
        arr[i-1]=arr[i]
    }
    arr[n-1]=temp
    console.log("Optimal of left rotate array: ", arr)
}
// leftRotate([1,2,3,4,5])


// 07.Left rotate by D times
// BruteForce: myway
function leftRotateNtimes(arr,n){
    if(n<=arr.length){
        let leftArr=arr.splice(0, n)
        arr.push(...leftArr)
        console.log("left array: ", arr)
    }
    else{
        console.log("Not possible")
        return false
    }
} 
// leftRotateNtimes([1,2,3,4,5,6],6)

// BruteForce: Actual Solution
// Time complexity: O(n)
// space complexity: O(d)
const leftRotateNtimesBrute=(arr,d)=>{
    // let temp=arr.slice(0,d)
    let temp=[]
    let n=arr.length

    for(let i=0; i<d;i++){
        temp.push(arr[i])
    }

    for(let i=d; i<n; i++){
        arr[i-d]=arr[i]
    }
    for(let j=n-d; j<n; j++){
        arr[j]=temp[j-(n-d)]
    }
    console.log("left rotate by d times: ", arr)
}
// leftRotateNtimesBrute([1,2,3,4,5,6,7,8],7);

// Optimal Solution
// Time complexity : O(N)
// Space complexity : 0(1)
function main(){
    let arr=[1,2,3,4,5,6,7]
    let n=arr.length
    let d=3
    leftRotateByNtimes(arr, n, d)
}
const leftRotateByNtimes=(arr,n,d)=>{
    console.log("Original Array: ", arr)
    d=d%n
    reverseArray(arr,0,d-1)
    reverseArray(arr,d,n-1)
    reverseArray(arr,0,n-1)
    console.log("Reverse array by D times: ", arr)
}

const reverseArray=(arr,start, end)=>{
    while(start<=end){
        let temp = arr[start]
        arr[start]=arr[end]
        arr[end]=temp
        start++
        end--
    }
}
// main()

// 08.Move all zero's to the end of the arrays
function allZeroEnd(arr){
    let count=0
    let tempArr=[]
    for(let i=0; i<arr.length; i++){
        if(arr[i]!=0){
            tempArr.push(arr[i])
        }
    }
    let totalZero=arr.length-tempArr.length
    for(let i=1; i<=totalZero; i++){
        tempArr.push(0)
    }
    console.log("original array: ", arr)
    console.log("zero end array: ", tempArr)
    arr=tempArr
    console.log("arr changed: ", arr)
}
allZeroEnd([1,0,2,3,2,0,0,4,5,1])

// Optimal Solutions
// Time Complexity: O(N)
// Space Complexity: O(1)
function allZeroEndArray(arr){
    let j=-1;
    for(let i=0; i<arr.length; i++){
        if(arr[i]===0){
            j=i
            break
        }
    }
    if(j==-1){
        console.log("No zero number in array")
    }
    for(let i=j+1; i<arr.length; i++){
        if(arr[i]!=0){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            j++
        }
    }
    console.log("All Non-Zero Optimal: ", arr);
};
// allZeroEndArray([1,0,2,3,2,0,0,4,5,1]);

// 09.Linear Search
// Time Complexity: O(N)
// Space Complexity: O(1)
function linearSearch(arr,num){
    for(let i=0; i<arr.length; i++){
        if(arr[i]===num){
            return i
        }
    }
    return -1
}
let result =linearSearch([6,7,8,4,1],7)
console.log("result: ", result)

// 10.Union of Two Sorted Arrays
// BruteForce: myway
function unionArray(arr1, arr2){
    let unionArr=[]
    for(let i=0; i<arr1.length; i++){
        if(!unionArr.includes(arr1[i])){
            unionArr.push(arr1[i])
        }
    }
    for(let i=0; i<arr2.length; i++){
        if(!unionArr.includes(arr2[i])){
            unionArr.push(arr2[i])
        }
    }
    console.log("Union Sorted Array: ", unionArr)
}
// unionArray([1,1,2,3,4,5,8],[2,3,4,4,5,6])

// BruteForce: actual
// using set method
function unionArrBrute(arr1,arr2){
    let s1=new Set([])
    for(let i=0; i<arr1.length; i++){
        s1.add(arr1[i])
    }
    for(let i=0; i<arr2.length; i++){
        s1.add(arr2[i])
    }
    console.log("set union: ", s1)
    let union=[...s1]
    let sortUnion=union.sort((a,b)=> a-b)
    console.log("Union array: ", union)
    console.log("Sort Union array: ", sortUnion)
}
// unionArrBrute([1,1,2,3,4,5,8],[2,3,4,4,5,6]);

// Optimal Solution
// Time Complexity: O(n1+n2)
// space complexity: O(n1+n2) storing both arr values init
const unionArrOptimal=(arr1,arr2)=>{
    let unionArr=[]
    let i=0
    let j=0
    // Array length
    let n1=arr1.length
    let n2=arr2.length
    while(i<n1 && j<n2){
        if(arr1[i]<=arr2[j]){
            if(!unionArr.includes(arr1[i])){
                unionArr.push(arr1[i])
            }
            i++
        }
        else{
            if(!unionArr.includes(arr2[j])){
                unionArr.push(arr2[j])
            }
            j++
        }
    };

    while(i<n1){
        if(!unionArr.includes(arr1[i])){
            unionArr.push(arr1[i])
        }
        i++
    };

    while(j<n2){
        if(!unionArr.includes(arr2[j])){
            unionArr.push(arr2[j])
        }
        j++
    };
    console.log("Union Array Optimal: ", unionArr);
}
// unionArrOptimal([1,1,2,3,4,5,8],[2,3,4,4,5,6]);

// 11.Intersection of two sorted array
// BruteForce:myway
// TimeCopmlexity: 0(N^2)
// Space Complexity: O(N1) taking largest array length
function instersectionArray(arr1, arr2){
    let zeroArr=[...Array(arr2.length)].fill(0)
    let interArr=[]
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i]===arr2[j] && zeroArr[j]===0){
                interArr.push(arr1[i])
                zeroArr[j]=1
                break
            }
        }
    }
    console.log("IntersectionArray: ", interArr)
}
// instersectionArray([1,2,2,3,3,4,5,6], [2,3,3,5,6,6,7])

// Optimal Solution
// TimeComplexity: O(N1+N2)
// SpaceCompleixty: O(N)
const interSecArray=(arr1, arr2)=>{
    let inerArr=[]
    let i=0
    let j=0
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]===arr2[j]){
            inerArr.push(arr1[i])
            i++
            j++
        }
        else if(arr1[i]<arr2[j]){
            i++
        }
        else{
            i++
        }
    }
    console.log("Intersection array optimal solution: ", inerArr)
}
interSecArray([1,2,2,3,3,4,5,6], [2,3,3,5,6,6,7]);