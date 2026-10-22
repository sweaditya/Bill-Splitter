const bill = document.getElementById("bill");
const people = document.getElementById("people");
const split = document.getElementById("split");
const result = document.getElementById("result");

split.addEventListener("click",function(){
    let output = ""
    let perPerson = Number(people.value);
    let total = Number(bill.value);
    if(Number(people.value)>0){
        output = total/perPerson;
    }else{
        output = "Invalid no";
    }
    result.textContent = output;
});