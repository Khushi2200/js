const a=[1,53,7,23,975,86];
const b=[892,6,32,57,11,40];

function Merge(){

    document.getElementById("a").innerHTML = "Array 1:" + a;    
    document.getElementById("b").innerHTML = "Array 2:" + b;

    let merge=a.concat(b);
    document.getElementById("merge").innerHTML = "Merge:" + merge;

    let sort=merge.sort(function(a,b){
        return a-b;
    })
    document.getElementById("sort").innerHTML= "Sort:" + sort;
}