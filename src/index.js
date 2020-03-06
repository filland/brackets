
module.exports = function check(str, bracketsConfig) { 
  let brackets = str.split("");
  let validOpeningBrackets = bracketsConfig.map(subArray => subArray[0]).join("");
  
  let queue = [];

  for(const item of brackets) { 
    if(validOpeningBrackets.includes(item) && isOpeningEqualBracket(queue)) {
      queue.unshift(item);
    } else if(isPair(queue[0], item, bracketsConfig)) {
      queue.shift();
    }
  }
  return queue.length === 0;
}

function isPair(openingBracket, closingBracket, bracketsConfig) {
  for (const item of bracketsConfig) {
    if(openingBracket === item[0] && closingBracket === item[1]) {
      return true;
    }
  }
  return false;
}

function isOpeningEqualBracket(arrayWithBrackets) {
  if(arrayWithBrackets.length === 0) return true;
  let counter = 0;
  for(const item of arrayWithBrackets) {
    if(item === '|' || item ==='7' || item === '8') {
      counter++;
    }
  }
  return counter % 2 === 0;
}