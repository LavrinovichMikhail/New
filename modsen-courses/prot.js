function sumCubes(n){
  if(n <= 1) return 1;
  return n**3 + sumCubes(n - 1);
}

function findSummands(n){
  const result = [1]
  while (result.reduce((a,b)=> a+b) != n**2)
    result.push(result.at(-1) + 2)
  return result;
}

console.log(sumCubes(3))
console.log(2**2)
console.log([1].at(-1))

console.log(findSummands(3))