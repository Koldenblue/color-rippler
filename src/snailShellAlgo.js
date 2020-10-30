snail = function(array) {
  console.log('starting array is', array);
  let snailArr = [];
  let n = array[0].length;
  console.log('n is', n)
  let offsetFromN = 0;
  
  do {
    // add all numbers from 0th array to snail
    for (let i = offsetFromN; i < n - offsetFromN; i++) {
      snailArr.push(array[offsetFromN][i])
    }
    
    offsetFromN++;
    
    // next iterate upon n = 1 thru n - 1, and take the array[n][n -1] and add to array, 
    for (let i = offsetFromN; i < n - offsetFromN + 1; i++) {
      snailArr.push(array[i][n - offsetFromN])
    }
    
    console.log('offsetFromN is now', offsetFromN)
    // then add numbers from n - 1 array to snail, in reverse order
    
    console.log(n - (n - offsetFromN))
    for (let i = n - (offsetFromN + 1); i > offsetFromN - 2; i--) {
      console.log('i is ', i)
      try {
        snailArr.push(array[n - offsetFromN][i]);
      } catch (TypeError) {
        break;
      }
    }
    
    offsetFromN++;
  
    // iterate from n - 2 array back down to n + 1 array, taking the 0th index.
    for (let i = n - offsetFromN; i >= offsetFromN - 1; i--) {
      try{
        snailArr.push(array[i][offsetFromN - 2])
      } catch (TypeError) {
        break;
      }
    }
    
    // repeat. 
    offsetFromN--;
    
  } while (offsetFromN < n)
    
  return snailArr;
}