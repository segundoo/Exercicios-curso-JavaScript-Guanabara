function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerhtml = (`Agora são ${hora}h.`)
    if (hora >= 0 && hora <= 5) {
        img.src = 'madrugada.png'   //MADRUGADA
        document.body.style.background = '#6b573b' 
    } else if (hora > 5 && hora < 12) {
        img.src = 'manhã.png'  //MANHÃ
        document.body.style.background = '#b55200'
    } else if (hora >= 12 && hora <= 18 ) {
        img.src = 'Tarde.png' //TARDE
        document.body.style.background = '#faa03e'
    } else {
        img.src = 'Noite.png' //NOITE
        document.body.style.background = '#071023'
    }
}
