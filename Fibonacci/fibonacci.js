function fibo(){
    let num=document.getElementById("Num").value;
    let a=0;
    let b=1;
    let c;
    for(let i=2;i<num;i++)
    {
        c=a+b;
        a=b;
        b=c;
    }
    document.getElementById("print").innerHTML=c;
}