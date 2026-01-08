const reverseString = (str) =>{
    return str.split('').reverse().join('')
}

const countVowels = (str) =>{
    const vowels = 'aeiouAEIOU'
    let count = 0

    for(let i of str ){
        if(vowels.includes(i)){
            count++;
        }
    }
    return count
}

const checkPalin = (str) =>{
    const strRev = str.split('').reverse().join('')
    if(str === strRev){
        return true
    }
    else return false
}

const findMax = (arr) =>{
    let max = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
} 

const removeDups = (arr) => {
    const result = []
    for(let i = 0; i < arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result;
}

const sumArray = (arr) =>{
    let sum  = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum
}

const findEven = (arr) =>{
    const result = []

    for(i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            result.push(arr[i])
        }
    }

    return result
}

const capFirst = (str) => {
  const result =  str.split(" ").map(word => word.charAt(0)
                     .toUpperCase() + word.slice(1))
                     .join(" ");
  return result
}

const factorial = (num) =>{
    let result = 1;
    for(i = 1; i <= num; i++){
        result *= i
    }
    return result
}

const pingPong = () => {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("PingPong");
        } else if (i % 3 === 0) {
            console.log("Ping");
        } else if (i % 5 === 0) {
            console.log("Pong");
        } else {
            console.log(i);
        }
    }
}