const arr=[];

function Filter(){

    let val=document.getElementById("val").value;
    arr.push(val);
    document.getElementById("arr").innerHTML="Values : "+arr;

   
        let even=arr.filter(x => x % 2 == 0)
        document.getElementById("Even").innerHTML="Even:" + even;
         let odd =arr.filter(x => x % 2 !== 0)
        document.getElementById("Odd").innerHTML="Odd:" + odd;

}