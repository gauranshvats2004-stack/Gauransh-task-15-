const finder = (arr) => {
    if (arr.length == 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const arr = [23, 32, 14, 54, 98, 57, 8];
console.log(finder(arr));

let sum=0;
const sumofarray=(arr)=>{
    if (arr.length == 0) return null;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}

console.log(sumofarray(arr));



let count=0;

const oddfinder=(arr)=>{
    if (arr.length == 0) return null;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2 != 0){
            console.log(arr[i],'is a odd no. in the given array');
            count++;
        }
    }
    return count;
}

console.log('Total no of odd elements are', oddfinder(arr));

