function avg() {
  let sum = 0;
  let checkNum = 0;
  for (let i = 0; i < arguments.length; i++) {
    checkNum = Number.parseInt(arguments[i]);
    if (!isNaN(checkNum)) sum += checkNum;
  }

  let average = sum / arguments.length;
  return average;
}

export default avg;
