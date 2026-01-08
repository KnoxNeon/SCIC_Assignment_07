const checkPalin = (str) =>{
    const strRev = str.split('').reverse().join('')
    if(str === strRev){
        return true
    }
    else return false
}

console.log(checkPalin("hello"))