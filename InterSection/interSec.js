const a=[10,20,30,40,50,90];
const b=[30,80,90,10];

function interSec(){

    document.getElementById("a").innerHTML="Array 1:" + a;
    document.getElementById("b").innerHTML="Array 2:" + b;

    let inter=a.filter((x) => b.includes(x));
    document.getElementById("inter").innerHTML = "Result:" + inter;

}