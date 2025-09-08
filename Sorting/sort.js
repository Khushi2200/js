const arr=[];
function asc(){

    let val=document.getElementById("val").value; 
    arr.push(val);
    document.getElementById("arr").innerHTML="Main Array:- " + JSON.stringify(arr);
    let asc=arr.sort(function(a,b){
        return a-b
    })
    document.getElementById("asc").innerHTML="Ascending:- " + JSON.stringify(asc);
       let des=arr.sort(function(a,b){
        return b-a;
    })
     document.getElementById("des").innerHTML="Decending:- " + JSON.stringify(des);
}

