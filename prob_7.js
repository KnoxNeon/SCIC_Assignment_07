const findEven = (arr) =>{
    const result = []

    for(i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            result.push(arr[i])
        }
    }

    return result
}

console.log(findEven([1,2,3,4]))