for(var i = 1 ; i< 100 ; i++){
    document.getElementById("numbersContainer").innerHTML += `<span class=" box">${i}</span>`;

    
    

    if( i % 3 == 0 && i % 5 == 0 ) {
      
        document.getElementById("numbersContainer").innerHTML += `<span class="red box">Buzz</span>`;
    }
    else if( i % 3 == 0){ 
       
        document.getElementById("numbersContainer").innerHTML += `<span class="green box">Fizz</span>`;

    }else if (i % 5 == 0){
        
        document.getElementById("numbersContainer").innerHTML += `<span class="yellow box">Buzz</span>`;

    }
   
   




}