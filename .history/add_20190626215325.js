console.log("document");
function add() {
    var valueone = document.getElementById('input1').value;
    var valuetwo = document.getElementById('input2').value;
    console.log('add');
    document.getElementById('output').innerHTML= ` 
<h2> the sum of the two value is ${parseInt(valueone) + parseInt(valuetwo)} </h2>`

}



function mul() {
    var valueone = document.getElementById('input1').value;
    var valuetwo = document.getElementById('input2').value;
    console.log('mul');
    document.getElementById('output').innerHTML= ` 
<h2> the mul of the two value is ${(valueone) * (valuetwo)} </h2>`

}


function division() {
    var valueone = document.getElementById('input1').value;
    var valuetwo = document.getElementById('input2').value;
    console.log('add');
    document.getElementById('output').innerHTML= ` 
<h2> the sum of the two value is ${parseInt(valueone) + parseInt(valuetwo)} </h2>`

}
