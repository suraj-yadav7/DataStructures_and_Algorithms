//01.find the no of times specific num present in the array 
//Using hashing method: It means prestore/fetching
function hashingArr(arr,n){
    // hashed array depends upon largest number of given array
    let hashArr=new Array(20).fill(0)
    for(let i=0; i<arr.length; i++){
        hashArr[arr[i]] +=1
    }
    // n is number which present how many times in array
    let count = hashArr[n]
    console.log(`Count of ${n} in hash array is: `, count)
}
// hashingArr([1,3,4,3,1,2,8],4)

// Brute force: count number of each element in an array
// single num in array cab be done similarly
function countArrayNum(arr){
    let numObj={}
    let count=0
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i]===arr[j]){
                count++
            }
        }
        numObj[arr[i]]=count
        count=0
    }
    console.log("Number of elements in array: ", numObj)
}
// countArrayNum([1,3,4,3,1,2,8])

// 02.Find no of times a char present in string
// if specific that lowercase letter then array lenght is 26
// formula will be hash[str[i]-'a']+=1
// Ref:readme
function hasingString(str, c){
    let hashStr=new Array(26).fill(0)
    for(let i=0; i<str.length; i++){
        hashStr[str[i].charCodeAt()-'a'.charCodeAt()]++
    }
    let count=hashStr[c.charCodeAt()-'a'.charCodeAt()]
    console.log("No of times Char present in str: ", count)
}
// hasingString('abdacgihd','e')

// **** concept of map in js ****
// C++ has stl of map and java collectin to store key value pair
// In js we can use object or map for key value pair storing
//for details Ref: readme
function usingObject(){
    let numArray = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
    let frequencyMap = {};
    numArray.forEach(num => {
        if (frequencyMap[num]) {
            frequencyMap[num]++;
        } else {
            frequencyMap[num] = 1;
        }
    });
    for (let num in frequencyMap) {
        console.log(`${num} appears ${frequencyMap[num]} times`);
    }
}
//using map method
function usingMap(){
    let numArray = [1, 2, 2,2, 3, 3, 3, 4, 4, 4, 4];
let frequencyMap = new Map();
numArray.forEach(num => {
    if (frequencyMap.has(num)) {
        frequencyMap.set(num, frequencyMap.get(num) + 1);
    } else {
        frequencyMap.set(num, 1);
    }
});
frequencyMap.forEach((value, key) => {
    console.log(`${key} appears ${value} times`);
});
};
usingMap()
// By above to method you can perform above two problems and more