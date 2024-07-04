// Selection Sort
// It select first element of unsorted array and it check with all elements in the array
// if any element is less than it change min last min index is swapped to starting of array.
// Time complexity is O(n^2)
function selectionSort(arr){
    for(let i=0; i<arr.length-1; i++){
        let min=i
        for(let j=i; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min=j
            } 
        }
        let temp=arr[i]
        arr[i]=arr[min]
        arr[min]=temp
    }
    console.log("selection sort: ", arr)
}
// let arr=[12,46,24,52,20,9]
// selectionSort(arr);

// Bubble sort
// Push the max element to the last of array with swapping adjacent elements
// Time complexity is O(n^2)
function bubbleSort(arr){
    for(let i=arr.length-1; i>=1; i--){
        for(let j=0; j<=i-1; j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j+1]
                arr[j+1]=arr[j]
                arr[j]=temp
            }
        }
    }
    console.log("Bubble sort: ", arr)
}
// let arr=[12,46,24,52,20,9]
// bubbleSort(arr)
// Incase arr is sorted then time complexity is O(n)
// because here loop get terminated at first run-itself
const bubbleSortEdge=(arr)=>{
    for(let i=arr.length-1; i>=1;i--){
        let didSwap=0
        for(let j=0; j<=i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1]
                arr[j+1]=arr[j]
                arr[j]=temp
                didSwap=1
            }
        }
        if(didSwap===0){
            break;
        }
    }
    console.log("Bubble sort for sorted array: ", arr)
}
// let arr=[2,4,6,8]
// bubbleSortEdge(arr)

// insertion sort
// Pick one element move it to right place by comparing left and swaping left
// By this it will be able to move smallest to left side of array
// Time Complexity is : O(n^2   )
function insertionSort(arr){
    for(let i=0; i<arr.length;i++){
        let j=i
        while(j>0 && arr[j-1]>arr[j]){
            let temp=arr[j-1]
            arr[j-1]=arr[j]
            arr[j]=temp
            j--
        }
    }
    console.log("Insertion sort is: ", arr)
}
let arr=[12,46,24,52,20,9]
insertionSort(arr);
