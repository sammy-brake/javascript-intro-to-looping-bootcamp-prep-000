function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.") ;
  } else {
       array.push(`I am ${i} strange loops.`) ;
  }
 
  }
  
  return array ; 
  
}

function whileLoop(n) {
   let countdown = n ; 
    
    while (countdown > 0) {
      
      console.log(--countdown) ;
      
    if (countdown === 0) {
      return "done" ;
    }
    }
}

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  
  do {
<<<<<<< HEAD
  array.shift() ;
  
} while (array.length > 0 && maybeTrue()) ;


 return array ; 
=======
  [array.shift()] ;
  
} while ([array.length > 0 && maybeTrue()]) ;


  return array
>>>>>>> f9766d1814e314b5e7d99b9528b4d5036cbfff60
  
  
}

