// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
const filter_list = l => {
    const list = l.filter(num => typeof num === 'number')
    return list
  }