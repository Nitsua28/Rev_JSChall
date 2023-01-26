// write a function that takes in an array and reverses each word in the array then the array

function ultraReverse (ray) {
  const arr = []
  for (let i = ray.length - 1; i >= 0; i--) {
    const newstring = ray[i].split('')
    const revArray = newstring.reverse()
    const joinStr = revArray.join('')
    arr.push(joinStr)
  }
  return arr
}

test('Super Reverse', () => {
  let words = ['abc', 'def', 'xyz']
  words = ultraReverse(words)
  expect(words).toEqual(['zyx', 'fed', 'cba'])
})
