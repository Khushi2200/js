function sum()
{
    let a=parseInt(document.getElementById("v1").value);
    let b=parseInt(document.getElementById("v2").value);
    let c=a+b;
    document.getElementById("res").innerHTML="Addition is: "+c;
}

function sub()
{
    let a=parseInt(document.getElementById("v1").value);
    let b=parseInt(document.getElementById("v2").value);
    let c=a-b;
    document.getElementById("res").innerHTML="Subtraction is: "+c;
}

function multi()
{
    let a=parseInt(document.getElementById("v1").value);
    let b=parseInt(document.getElementById("v2").value);
    let c=a*b;
    document.getElementById("res").innerHTML="Multiplication is: "+c;
}

function divi()
{
    let a=parseInt(document.getElementById("v1").value);
    let b=parseInt(document.getElementById("v2").value);
    let c=a/b;
    document.getElementById("res").innerHTML="Division is: "+c;
}