

function BT(){
    let name= document.getElementById("name").value;
    let amount=document.getElementById("amount").value;

    let type;
    if(amount<0)
        type="Expense";
    else
        type="Income";
      let transction = JSON.parse(sessionStorage.getItem("items"))

      if(transction == null){
        transction = [];
      }


    transction.push({
        name:name, 
        amount:amount, 
        type:type
    });

    sessionStorage.setItem("items", JSON.stringify(transction))

  
    let tot=0;
    let Income=0;
    let Expense=0;

    transction.forEach(x => {
        tot+= parseInt(x.amount);
        if(x.type == "Income")
            Income+= parseInt(x.amount);

        else
            Expense+= parseInt(x.amount);
    })

    document.getElementById("tot").innerHTML= tot;
    document.getElementById("income").innerHTML=Income;
    document.getElementById("expense").innerHTML=Expense;

    let his = document.getElementById("history");
    let li = document.createElement("li");
    let text = document.createTextNode(name + " " + amount)

    li.appendChild(text)
    his.appendChild(li)

}