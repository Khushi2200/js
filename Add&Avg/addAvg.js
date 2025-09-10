const arr=[];

function addAvg(){

    let val=parseInt(document.getElementById("val").value);
    arr.push(val);
    document.getElementById("arr").innerHTML="Array:" + arr;

    let sum=0;
    for(let i=0; i<arr.length;i++)
    {
        sum+=arr[i];
    }
    document.getElementById("sum").innerHTML = "Sum = " + parseInt(sum);

    let avg= sum/arr.length;
    document.getElementById("avg").innerHTML = " Average = " + parseFloat(avg)
}