// Code your solutions in this file

function writeCards(names, event) {
  let newArr = [];
  for(let i =0; i < names.length; i++) {
    let eventMesssage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    newArr.push(eventMesssage)
  }

  return newArr;
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"],"surprise"));


function countDown(number) {
  let i = number;
  while(i >= 0) {
    console.log(i--)
  }
}

countDown(10);