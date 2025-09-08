function pali(){
    let x=document.getElementById("nm").value;
    let reverse=x.split("").reverse().join("");
    if(x==reverse)
        document.getElementById("pali").innerHTML= x + " is Palindrome";
    else
        document.getElementById("pali").innerHTML= x + " is not Palindrome"
}