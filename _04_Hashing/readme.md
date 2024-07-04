//Few important concept explanation
// 02.Find no of times a char present in string
->If specific that lowercase letter then array lenght is 26
formula will be hash[str[i]-'a']+=1

->If Uppercase then hased array size will be same 26
formula hash[str[i]-'A]+=1

->If letter are not specified then take 256 of hash array size,
because as per ASCII there are 256 different char and symnbols.
formula hash[str[i]]=+1

<!-- Ordered map and Undorderd Map in javascript similar to C++-->
//Using Plain Objects
Plain objects in JavaScript are similar to C++'s std::unordered_map. They are hash tables and provide average O(1) time complexity for inserts and lookups. Here’s how you can use an object to count the frequency of elements in an array:

javascript
Copy code
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

//Using Map
The Map object in JavaScript is similar to C++'s std::map. It maintains the order of elements based on their insertion and also provides average O(1) time complexity for inserts and lookups. Here’s how you can use a Map to count the frequency of elements in an array:

javascript
Copy code
let numArray = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
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
//Comparison
->Objects:
Simple and easy to use.
Suitable for most cases where keys are strings or numbers.
Do not maintain order of keys.
Cannot use non-primitive keys directly.

->Maps:
More powerful and flexible.
Can use any value (objects, functions, etc.) as keys.
Maintains insertion order.
Provides built-in methods like set, get, has, and delete.
Choose the one that fits your use case best. For simple key-value storage with primitive keys, 
objects are often sufficient. If you need more flexibility with keys or 
need to maintain insertion order, Map is a better choice.


<!-- Division method -->
If conditin is to have hash array of size 10 but in that max number in array is 150
then arr[i]%10 => 22%10=2=> now at index 2 in hasha array increase by 1
collision happen when remainder of multiple element of array are same then.
Single hash arry space store mutliple array value and remaining hash array space is empty
eg: 22->2, 34->4, 72->2 and 92->2