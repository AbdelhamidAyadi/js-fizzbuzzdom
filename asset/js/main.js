for (var i = 1; i < 101; i++) {
    
   

    if (i % 3 == 0 && i % 5 == 0) {

        document.getElementById("numbersContainer").innerHTML += `<span class="red box">FizzBuzz</span>`;
    } else if (i % 3 == 0) {

        document.getElementById("numbersContainer").innerHTML += `<span class="green box">Fizz</span>`;

    } else if (i % 5 == 0) {

        document.getElementById("numbersContainer").innerHTML += `<span class="yellow box">Buzz</span>`;

    }
    else{
        document.getElementById("numbersContainer").innerHTML += `<span class="box">${i}</span>`;
    }

}

