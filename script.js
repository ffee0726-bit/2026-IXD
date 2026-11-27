
function sayHello(){
    var response = prompt("what is your name?");
    alert("Hello,"=response+",have a good day!");
}

function showTopic(){
    var X=document.getElementByID("demo");
    X.style.fontSize="25px";
    X.style.color="red";
}

function add(a,b){
    return a + b;
}
console.log(add(20,30));
console.log((100,30));