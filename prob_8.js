const capFirst = (str) => {
  const result =  str.split(" ").map(word => word.charAt(0)
                     .toUpperCase() + word.slice(1))
                     .join(" ");
  return result
}

console.log(capFirst("hello world"))