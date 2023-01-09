function contar() {
    let ini = document.querySelector ('input#txti')
    let fim = document.querySelector ('input#txtf')
    let passo = document.querySelector ('input#txtp')
    let res = document.querySelector ('div#res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert ('[ERRO] Valores invalidos')
        res.innerHTML = 'Impossível contar!'
       
    } else {
        res.innerHTML = 'Contando:'
        let i = Number (ini.value)
        let f = Number (fim.value)
        let p = Number (passo.value) 
        if (p <= 0) {
            window.alert ('[ERRO] Passo invalido! o passo irá ser substituido por 1.')
            p = 1
        }
        if (i < f) { //CONTAGEM CRESCENTE
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c}\u{1F449}`
        }
        res.innerHTML += `\u{1f3c1}`    
            } else { //CONTAGEM DECRESCENTE
                for (let c = i; c >= f; c -= p) {
                    res.innerHTML += ` ${c}\u{1f449}`
                }
                res.innerHTML += `\u{1f3c1} `
            }
        }
}