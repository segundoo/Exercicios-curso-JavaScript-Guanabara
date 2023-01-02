function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criançah.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemh.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'hadulto.png')
            } else if (idade >= 60) {
                //idoso
                img.setAttribute('src', 'hidoso.png')
            }
            
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 21) {
                //criança
                img.setAttribute('src', 'criançam.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'madulta.png')
            } else if (idade >= 60) {
                //idoso
                img.setAttribute('src', 'midosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é um(a) ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}
