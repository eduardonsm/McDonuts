div = document.getElementById("myDIV")
div2 = document.getElementById("myDIV2")
res = document.getElementById("res")


var normal = 0;
$('#addCount').click( () => {
    normal++
    div.innerHTML = normal;
    
});
$('#lessCount').click(() => {
    if (normal <= 0) {
        alert('error')
    } else {
        normal--
        div.innerHTML = normal;
        
    }
});
var recheio = 0;
$('#addCountR').click(() => {
    recheio++
    div2.innerHTML = recheio;
});
$('#lessCountR').click(() => {
    if (recheio <= 0) {
        alert('error')
    } else {
        recheio--
        div2.innerHTML = recheio;
        
    }
});

$('#calc').click(() => {
    res.innerHTML = `${recheio} donuts com recheio = ${recheio * 5} <br> ${normal} donuts normal/is = ${normal * 3} <br> <strong>TOTAL:</strong> ${(recheio * 5) + (normal * 3)}`
});
