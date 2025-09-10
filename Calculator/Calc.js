function display(val){
    document.getElementById("in").value += val ;
}

function solve(){
    let x = document.getElementById("in").value ;
    let y = eval(x)
    let z = y/100
    document.getElementById("in").value = y ;
}

function cl(){
    document.getElementById("in").value = "" ; 
}

function modulate(){
    let x=document.getElementById("in").value;
    let y=x/100;
    document.getElementById("in").value = y;
}

