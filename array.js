function addElementToBeginningOfArray(array, element) {
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;

}

function accessElementInArray(array, index) {
 
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift(element)
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(element)
  return array

}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length -1)

}

// Challenge: remove an element from the middle of an array at a given index and return a copy of the original array, minus that element

function nonDestructivelyRemoveAtIndex(array, index) {
  //using slice and spread
}