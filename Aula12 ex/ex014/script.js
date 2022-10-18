function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora}:${minutos} hrs!`


if (hora >= 0 && hora < 12){
    img.src = 'imagens/manha.png'
    document.body.style.background = '#c99e6b'
}
else if (hora >= 12 && hora < 18){
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#918d4d'
}
else {
    img.src = 'imagens/noite.png'
    document.body.style.background = '#013171'
}
}