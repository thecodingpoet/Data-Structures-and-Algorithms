const factorial = () => {
  const cache = {}

  return (n) => {
    if (n == 1) return 1
    if (n in cache) return cache[n]
    const cachedFactorial = cache[n-1] || factorial()(n-1) 
    result = n * cachedFactorial
    cache[n] = result
    return result
  }
}

const cachedFactorial = factorial()
console.log(cachedFactorial(5)) // Computes the factorial of 5 the first time
console.log(cachedFactorial(5)) // Gets the cached factorial of 5
console.log(cachedFactorial(6)) // Computes 6 * the cached factorial of 5