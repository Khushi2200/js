function TipCalc(){
    let amount= parseInt(document.getElementById("Amount").value );
    let tip=parseInt(document.getElementById("Tip").value);
    
    let totTip=amount*tip/100;
    let GST=amount*18/100;
    let Total=amount+totTip+GST;

    document.getElementById("amount").innerHTML="Amount :"+amount;
    document.getElementById("tip").innerHTML="Tip: "+totTip;
    document.getElementById("GST").innerHTML="GST: "+GST;
    document.getElementById("Total").innerHTML="Total Amount To pay : "+Total
}