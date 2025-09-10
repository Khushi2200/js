function CtoF(){

   let Celsius = document.getElementById("c").value;
   let Fahrenheit= Celsius*33.8;
   document.getElementById("f").value=Fahrenheit;
}

function FtoC(){

    let Fahrenhit = document.getElementById("f").value;
    let Celsius=Fahrenhit/33.8;
    document.getElementById("c").value=Celsius
}