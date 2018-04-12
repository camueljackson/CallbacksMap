var testinArr = ["ground", "control", "to", "major", "tom"];

function map(existingArr, myFcnt) {

  var myArr = [];

  for (i = 0; i < existingArr.length; i++) {

    myFcnt(existingArr[i])

    myArr.push(myFcnt(existingArr[i]));

  }
  console.log(myArr);
}

function CapsLock(word) {
  return word.toUpperCase();
}

function lengthOfWord(word) {
  return word.length
}

function revWord(word){
  return word.split('').reverse().join('');
}

map(testinArr, lengthOfWord)

map(testinArr, CapsLock)

map(testinArr, revWord)