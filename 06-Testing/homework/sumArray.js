const sumArray = (array, num) => {
    for ( const num1 of array) {
      for (const num2 of array) {
        if(num1 === num2) continue;
        if(num1 + num2 === num) return true;
      }
    }
    return false;
  }

  module.export = sumArray