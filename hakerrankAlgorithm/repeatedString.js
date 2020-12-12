function repeatedString(s, n) {
    // partally works. need to be improved

    let newString = '';
    let result;
    let count = 0;
    
    for(let i = 0; i <= n-1; i++) {
        newString += s;
    }
    
    newString.substring(0, n).split("").map((arr) => {
        if(arr === 'a') {
          count++;
      }
    });
    
    return count;   
}

console.log(repeatedString('aba', 10));