// basic recursion problems
// 01. Count Increment using recursion
function countIncrement(){
    if(count ==4){
        return;
    }
    else{
        console.log("count: ", count)
        count+=1
        countIncrement(count)
    }
}
// countIncrement(0)

// 02. Print name 5 Times
function nameFiveTimes(i,times){
    if(i >= times){
        return
    }
    else{
        console.log("Dhoni")
        nameFiveTimes(i+1, times)
    }
}
// nameFiveTimes(0, 5)

//03. Print Number from n to 1
const recursiveNum=(num)=>{
    if(num<=0) return 
    else{
        console.log("num: ", num)
        recursiveNum(num-1)
    }
}
// recursiveNum(4);

// 04. Print from N to 1 in backtrack 
// In backtrack print is done after recursive function call
function backtrackNum(i,n){
    if(i<1){
        return 
    }
    backtrackNum(i-1,n)
    console.log("N: ", (n-i+1))
}
let n=5
// backtrackNum(n,n)

//** 05.Sum of N natural number
// return value - wise pattern
const sumOfNatural = (n)=>{
    if(n<1) return 0
    let sum=n+sumOfNatural(n-1)    
    return sum
}
// let sum = sumOfNatural(3)
// console.log("sum: ", sum)

//parameter wise: It carry paramet value, increase it and print at last recursive
//parameter and print : pattern
// sumNatural(5,0)
function sumNatural(i,sum){
    if(i<1){
        console.log("sum: ", sum)
        return
    }
    sumNatural(i-1,sum+i)
}
// sumNatural(3,0)

//06. Factorial of N
//return value - pattern
function factorialNum(n){
    if(n==0 || n==1){
        return 1
    }
    return n*factorialNum(n-1)
}
// let fact=factorialNum(5)
// console.log("factorial of N: ", fact);

// 07. Reverse array
// Pointer approach
function revArr(arr){
    let start=0
    let end = arr.length-1
    while(start<end){
        let temp=arr[start]
        arr[start] = arr[end]
        arr[end]=temp
        start++
        end--
    }
    console.log("reverse array pointer: ", arr)
}
// revArr([2,4,6,8])
// Now recursive using above approach
const revArrRecusive=(arr, l,r)=>{
    if(l>=r){
        return 
    }
    let temp=arr[l]
    arr[l] = arr[r]
    arr[r]=temp
    l++
    r--
    revArrRecusive(arr,l,r)
    return arr
}
let arr=[2,4,6,8]
let l=0
let r=arr.length-1
// let result=revArrRecusive(arr, l, r)
// console.log("reverse array: ", result)

// 08. String is palindrome or not
const palindromeRecursive =(str,i)=>{
    if(i>=(parseInt(str.length/2))){
        console.log("String is palindrome")
        // return true;
    }
    if(str[i]!=str[str.length-1-i]){
        return false;
    }
    i++
    palindromeRecursive(str, i)
}
// let result = palindromeRecursive("madam",0);
// console.log("string is palindrome: ", result);

//09.Fibonanic sequence 
// Double recursive inside a function
function doubleRecursiveFibonanic(n){
    if(n<=1){
        return n
    }
    let lastNum = doubleRecursiveFibonanic(n-1)
    let secondLastNum=doubleRecursiveFibonanic(n-2)
    return lastNum+secondLastNum
}
// let result=doubleRecursiveFibonanic(6)
// console.log("Fibonanic number: ", result)

// *** Multiple Recursion calls ***
// 10. Subsequence using recursion **imp
function subsequenceRecursion(ind, arr2,arr, n){
    if(ind>=n){
        console.log(arr2)
        return
    }
    arr2.push(arr[ind])
    subsequenceRecursion(ind+1, arr2, arr,n)
    arr2.pop()
    subsequenceRecursion(ind+1, arr2, arr, n)
};
subsequenceRecursion(0,[], [3,1,2],3);