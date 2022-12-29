module.exports = function (num) {
  
    if (num == 0) {
      return 0;
    } else if (num == 1) {
      return 1;
    } else {
      let myArray = [1,1];
      // for 
      n = myArray.push(module.exports(num-1) + module.exports(num-2));
      return n;
    }
  
    
  }
  
  console.log(module.exports(10))