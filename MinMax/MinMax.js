const arr=[];
function Val(){
  
    let val=document.getElementById("val").value;
    arr.push(val);
    document.getElementById("arr").innerHTML="Values : "+arr;

  let  asc=arr.sort(function(a,b){
        return a-b;   
    })
    document.getElementById("min").innerHTML="Ascending is: "+ asc;

    let small = asc[0];
    let min=document.getElementById("min").innerHTML="Minimum Value is: "+small

    let largest = asc[asc.length - 1]
    let max=document.getElementById("max").innerHTML="Maximum Value is: "+largest

    
}