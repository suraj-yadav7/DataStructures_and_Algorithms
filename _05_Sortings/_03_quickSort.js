//QUick sort
function quickSort(arr, low, high){
    if(low<high){
        let pIndex = partition(arr, low, high)
        quickSort(arr,low, pIndex-1)
        quickSort(arr,pIndex+1,high)
    }
}
function partition(arr,low,high){
    let pivot = arr[low]
    let i=low
    let j=high
    while(i<j){
        while(arr[i]<=pivot && i<=high-1){
            i++
        }
        while(arr[j]>pivot && j>=low-1){
            j--
        }
        if(i<j){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
        }
    }
    let temp2=arr[low]
    arr[low]=arr[j]
    arr[j]=temp2
    return j
}
let arr=[2,5,3,1,4]
let low=0
let high=arr.length-1
quickSort(arr,low,high)
console.log("Quick sort of array: ", arr)