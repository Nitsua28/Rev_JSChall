// write a function that, given N, returns an array of even numbers 1-N (inclusively) using loops
// example, generateEven(6) => [2,4,6]
function generateEven (N) {
  let arr = []
  for (let i = 1; i < N + 1; i++) if (i % 2 === 0) arr.push(i)
  return arr
}

test('6', () => {
  const result = generateEven(6)
  expect(result).toStrictEqual([2, 4, 6])
})

test('0', () => {
  const result = generateEven(0)
  expect(result).toStrictEqual([])
})

test('11', () => {
  const result = generateEven(11)
  expect(result).toStrictEqual([2, 4, 6, 8, 10])
})
