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

console.log(countVowels("hello"))