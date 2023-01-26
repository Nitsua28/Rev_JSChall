// Given a list of characters, return an array of all jedi names.
// ex: Given [{name: "Rey", "position": "jedi"}, {name: "Darth Vader", "position": "sith"}]
// the function would return ["Rey"]

function returnJedi (characters) {
  const republic = characters.filter(character => character.position === 'jedi')
  const arr = []
  republic.forEach(element => {
    arr.push(element.name)
  })
  return arr
}

test('All Jedi', () => {
  const result = returnJedi([
    {
      name: 'Rey',
      position: 'jedi'
    },
    {
      name: 'Luke',
      position: 'jedi'
    },
    {
      name: 'Cal',
      position: 'jedi'
    }
  ])
  expect(result.length).toBe(3)
  expect(result).toContain('Luke')
  expect(result).toContain('Rey')
  expect(result).toContain('Cal')
})

test('All Sith', () => {
  const result = returnJedi([
    {
      name: 'Count Dooku',
      position: 'sith'
    },
    {
      name: 'Darth Maul',
      position: 'sith'
    },
    {
      name: 'Darth Sidious',
      position: 'sith'
    }
  ])
  expect(result.length).toBe(0)
})

test('Jedi and Sith', () => {
  const result = returnJedi([
    {
      name: 'Rey',
      position: 'jedi'
    },
    {
      name: 'Darth Vader',
      position: 'sith'
    },
    {
      name: 'Jar-Jar',
      position: 'sith'
    }
  ])
  expect(result.length).toBe(1)
  expect(result).toContain('Rey')
})
