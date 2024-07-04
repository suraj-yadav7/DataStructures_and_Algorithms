// Merge Sort
// It work on the principle of divide and conquer(merge)
// Time complexity: O(nlogn)
// space complexity: O(n) for tempArr
function mergeSort(arr, low, high){ 
    if(low == high){
        return
    }
    let mid=parseInt((low+high)/2)
    mergeSort(arr, low, mid)
    mergeSort(arr,mid+1, high)
    mergeElement(arr,mid, low, high)
}

function mergeElement(arr, mid, low, high){
    let tempArr=[]
    let left=low
    let right=mid+1
    while(left<=mid && right<=high){
        if(arr[left]<=arr[right]){
            tempArr.push(arr[left])
            left++
        }
        else{
            tempArr.push(arr[right])
            right++
        }
    }

    while(left<=mid){
        tempArr.push(arr[left])
        left++
    }
    while(right<=high){
        tempArr.push(arr[right])
        right++
    }
    for(let i=low; i<=high; i++){
        arr[i]=tempArr[i-low]
    }
}
let arr=[3,2,4,1,3];
let high=arr.length-1
let low=0
console.log("unsorted array: ", arr)
let result =mergeSort(arr, low, high);
console.log("After merge sorted array: ", arr)