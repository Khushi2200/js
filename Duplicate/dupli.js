const arr=[];

function Dupli(){

    let val=document.getElementById("val").value;
    arr.push(val);
    document.getElementById("arr").innerHTML="Main Array:" + arr;
    
    let removDupli=[...new Set(arr)];
    document.getElementById("res").innerHTML="Without Duplicate:" + removDupli;
}