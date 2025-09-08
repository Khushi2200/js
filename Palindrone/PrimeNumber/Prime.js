function Prime(){
    let x = document.getElementById("val").value;
    let flag = true

    
    for(let i=2; i<x;i++)
    {
        if(x%i==0)
        {
            flag=false;
        }
    }
    if(flag==true){
        document.getElementById("Prime").innerHTML = x +" is Prime"
    }
    else
        document.getElementById("Prime").innerHTML =  x +" is not Prime"
}