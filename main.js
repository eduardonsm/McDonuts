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
var precoN = normal * 3
var precoR = recheio * 5
$('#calc').click(() => {
    res.innerHTML = `${recheio} donuts com recheio = ${precoR} <br> ${normal} donuts normal/is = ${precoN} <br> <strong>TOTAL:</strong> ${precoN + precoR}`
});



