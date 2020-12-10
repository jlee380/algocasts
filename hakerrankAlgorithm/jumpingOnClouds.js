function jumpingOnClouds(c) {
    let currentPosition = 0;
    let count = 0;
    
    for(let i = 0; i < c.length-1; i++) {
        if(currentPosition == c.length-1) {
            break;
        }
        if(c[currentPosition+2] === 0) {
        	currentPosition += 2;
          count++;
        } else {
        	currentPosition += 1;
          count++;
        }
        
    
}
return count;
}



console.log(jumpingOnClouds([0, 0, 0, 0, 1,0]))