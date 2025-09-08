const arr=[];

function map(){

    let val=document.getElementById("val").value;
    arr.push(val);
    document.getElementById("arr").innerHTML="Values : "+ JSON.stringify(arr);
    
    let newVal=arr.map((nextVal) => nextVal*2);
    document.getElementById("nextVal").innerHTML="Double of value:"+ JSON.stringify(newVal);
}