// kebab case is a casing where words are connected via a - (dash)
// the words have been speared together like on a kebab stick
// write a function that takes in a string and kebabs it based on spaces
// there should be no double kebabs hello -world creates hello-world not hello--world
// there should be no begining or ending dashes

function kebab (phrase) {
  const arr = phrase.split(/[^A-Za-z]/).filter(element => element !== '')
  return arr.join('-')
}

test('simple kebab', () => {
  const result = kebab('super cool thing')
  expect(result).toBe('super-cool-thing')
})

test('intra kebab', () => {
  const result = kebab('epic- -thunder -storm')
  expect(result).toBe('epic-thunder-storm')
})

test('trailing kebab', () => {
  const result = kebab('-really- upbeat cheetah-')
  expect(result).toBe('really-upbeat-cheetah')
})
