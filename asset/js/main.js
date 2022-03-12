for(var i = 1 ; i< 1000 ; i++){
    document.getElementById("numbersContainer").innerHTML += `<span class="box">${i}</span>`

    if( i % 3 == 0){
       
        document.getElementById("numbersContainer").innerHTML += `<span class="box">Fizz</span>`

    }




}