function exists (_arr, _num){
    for(i = 0; i<_arr.length; i++){
        if(_arr[i] == _num){
           return true
        }
    }
    return false
}



const arr = [1, 3, 5, 6]
const num = 2

let doesExists = exists(arr, num)
console.log(doesExists);
