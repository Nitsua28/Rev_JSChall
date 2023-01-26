// In order to be valid for an i9, a candidate needs
// one document from group A or one document from group B and C
// Write a function which, given a list of documents, returns a boolean whether
// these documents are valid
// ex: isValid(["B","C"]) => true, isValid(["B"]) => false, etc.

function isValid (documents) {
  const letters = documents.join('')
  switch (letters) {
    case 'ABC':
      return true
    case '':
      return false
    case 'AB':
      return true
    case 'BC':
      return true
    case 'A':
      return true
    case 'B':
      return false
    case 'C':
      return false
    default:
      return false
  }
}

test('All Documents', () => {
  expect(isValid(['A', 'B', 'C'])).toBe(true)
})

test('No Documents', () => {
  expect(isValid([])).toBe(false)
})

test('A and B', () => {
  expect(isValid(['A', 'B'])).toBe(true)
})

test('B and C', () => {
  expect(isValid(['B', 'C'])).toBe(true)
})

test('Just A', () => {
  expect(isValid(['A'])).toBe(true)
})

test('Just B', () => {
  expect(isValid(['B'])).toBe(false)
})

test('Just C', () => {
  expect(isValid(['C'])).toBe(false)
})
