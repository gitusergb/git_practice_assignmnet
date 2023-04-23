function ifPrime(num) {
    let c=0;
         for(let i=1;i<=num;i++){
             if(num%i!=0){
             c++;
             }
         }
         if(c==2){
     console.log("Prime");
     }
     else{
        console.log("Not Prime"); 
     }
  }
  
  let n=10;
  ifPrime(n);
  