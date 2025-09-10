function INRtoUSD(){
    let inr=document.getElementById("INR").value;
    let USD=inr*88.17;

    document.getElementById("USD").value = USD ;
}

function USDtoINR(){
    let usd=document.getElementById("USD").value;
    let inr=usd/88.17;

    document.getElementById("INR").value = inr ;
}