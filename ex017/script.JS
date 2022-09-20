function contar(){
    var ini=window.document.getElementById('ini')
    var fim=window.document.getElementById('fim')
    var passo=window.document.getElementById('pass')
    var res= window.document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0|| passo.value.lengtn == 0){
        window.alert( '[ERRO] Faltam dados. Digite valores')
    }else {
        res.innerHTML = 'Contando:'
        var i= Number(ini.value)
        var f= Number(fim.value)
        var p= Number(passo.value)
        for(var c = i; c <= f; c += p ){
            res.innerHTML += `${c}, `
        }
    }
}