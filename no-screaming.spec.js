// A string is considered "screaming" if 50% or more of its characters are capitalized
// noScreams is a function that should take in an array of strings and return an array with all screams removed

// FORBIDDEN KEYWORDS
// for, while

function noScreams (ray = [""]) {
  function isScreaming(str = ""){
    const characterArray = [...str];

    let upper = 0;
    let lower = 0;

    for(const character of characterArray){
      if(character.toUpperCase() === character){
        upper+=1;
      }else{
        lower+=1;
    }

  }
  return upper/characterArray.length >= 0.50

}

  return ray.filter(e => !isScreaming(e));




}

test('All Screaming', () => {
  const result = noScreams(['AAAA', 'BBBB', 'CCCC'])
  expect(result.length).toBe(0)
})

test('None Screaming', () => {
  const result = noScreams(['aaaa', 'bbbb', 'cccc'])
  expect(result.length).toBe(3)
})

test('Some Screaming', () => {
  const result = noScreams(['aaaA', 'BBBb', 'cccC'])
  expect(result.length).toBe(2)
})
