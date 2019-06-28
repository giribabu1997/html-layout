console.log(document);
function add()
{
    var value1 = document.getElementById('input1').value;
    var value2 = document.getElementById('input2').value;
console.log('add');
document.getElementById('output').innerHTML = `<h2> the add of the two value is ${parseInt(value1 + value2)}</h2>`
}