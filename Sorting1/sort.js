const arr=[];

function sort(){

    let Value=document.getElementById("val").value;
    arr.push(Value);
    document.getElementById("arr").innerHTML="Main Array:" + arr;
    
    let asc=arr.sort(function(a,b){

        return a-b;
    })
    document.getElementById("asc").innerHTML="Ascending: " + asc;

    let des=arr.sort(function(a,b){

        return b-a;
    })
    document.getElementById("des").innerHTML="Descending: " + des;
}