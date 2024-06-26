//01.Count number of digits
function countDigit(n){
    let count=0
    while(n>0){
        console.log('n: ',n)
        count+=1
        n=parseInt(n/10)
    }
    console.log("count of digit's: ", count)
    return n;
}
let num=2578
// countDigit(num);

// 02.Reverse a number
// -- 4561 reverse is 1654 but if 14600 then reverse must be 641, remove zeros
const reverseNum =(num)=>{
    let strNum=num+''
    let revNum=''
    console.log("Original Number: ", strNum, typeof(strNum))
    for(let i=strNum.length-1; i>=0; i--){
        if(!(strNum[i] ==='0')){
            revNum+=strNum[i]
        }
    }
    console.log("Reverse Number: ", revNum)
}
// reverseNum(14600)

// ReverseNumber using math concepts
const revNumMaths=(num)=>{
    let rev=0;
    while(num>0){
        let lastDigit=num%10
        num=Math.floor(num/10)
        rev=(rev*10)+lastDigit
    }
    console.log("reverse a num: ", rev)
    return rev
}
// revNumMaths(14600)

//03. Palindrome on numbers
//statement: given 121, o/p 121
const palindromeNum = function palinNum(num){
    let rev=0;
    let n=num
    while(num>0){
        let lastDigit=num%10
        num=Math.floor(num/10)
        rev =(rev*10)+lastDigit
    }
    if(n==rev){
        console.log("Number is palidnrome", n ,'==', rev)
    }
    else{
        console.log("Number is NOT A Palidnrome",n ,'!=', rev)
    }
}
// palindromeNum(10101);

// 04. Amstrong number
const amstrongNum =(num)=>{
    let tempNum =num
    let sum=0
    while(num>0){
        let lastDigit=num%10
        num=parseInt(num/10)
        sum+=(lastDigit*lastDigit*lastDigit)
    }
    if(sum===tempNum){
        console.log("Number is amstrong")
    }
    else{
        console.log("Number is not amstrong")
    }
    console.log("Original number: ",tempNum , "amstrong number: ", sum)
}
// amstrongNum(35)

// 05. Print all Divisior of Number
// ref-readme
function allDivisorNum(n){
    let divisorArr=[]
    let i=0
    while(i<n){
        if(n%i===0){
            console.log(i)
            divisorArr.push(i)
        }
        i++
    }
    console.log("Number all Divisor: ", divisorArr)
}
// allDivisorNum(300)
// ->Optimize solution using maths concepts
const allDivisNum=(n)=>{
    let divsArr=[]
    for(let i=1; (i*i<=n); i++){
        if(n%i===0){
            divsArr.push(i)
            if(n/i !=i){
                divsArr.push(n/i)
            }
        }
    }
    console.log("All divisor of Number:", divsArr.sort((a,b)=> a-b))
}
// allDivisNum(36)

// 07. Prime number
// Actual def: A number which has two factors 1 and itself.
const primeNum = function number(n){
    for(let i=1; i<=n; i++){
        if(n%2 !==0){
            console.log("Prime Number: ", n)
        }
        else{
            console.log("Not prime Number: ", n)
        }
    }
}
// primeNum(17)
// ->Optimize solutions
const optimizePrimeNum = (n)=>{
    let count =0;
    for(let i=1; (i*i<=n); i++){
        if(n%i===0){
            count++
            if(n/i !=i){
                count++
            }
        }
        console.log("count: ", count)
    }
};
// optimizePrimeNum(7)

// 08. GCD two numbers
// ->bruteforce method
// time complexity : O(min(n1,n2))
function bruteForceGCD(a,b){
    let gcdNum=1;
    for(let i=0; i<=Math.min(a,b);i++){
        if(a%i===0 && b%i==0){
            gcdNum=i
        }
    }
    console.log(`GCD of ${a}, ${b} is: `, gcdNum)
}
// bruteForceGCD(20,5);

//-> optimize solution using euclidean algorithm
// timecomplexity: O(log base0 (min(a,b)))
const gcdTwoNum= (a,b)=>{
    while(a>0 && b>0){
        if(a>b) a=a%b
        else b=b%a
    }
    if(a==0) console.log(b)
    else console.log(a)
}
// gcdTwoNum(20, 40);


