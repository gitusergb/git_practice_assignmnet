function ifPalindrome(num){
    let n =Number(num);
        let rev=0;
        let Num = n;
        while(Num!==0){
        rev=(rev*1)+(Num%10);
        //console.log( "rev:", rev); 
        Num = Math.floor(Num/10);
        //console.log(Num); 
       // console.log(n, rev); 
    
    }
    (rev===n)?console.log('Palindrome'):console.log('Not Palindrome');
        
    }