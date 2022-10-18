function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    }else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (sex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade <= 12){
                img.setAttribute('src','imagens/bebeh.png')
            }else if (idade <= 25){
                img.setAttribute('src','imagens/jovemh.png')
            }else if (idade <= 50){
                img.setAttribute('src','imagens/homem.png')
            }else {
                img.setAttribute('src','imagens/idoso.png')
            }
        }else if (sex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade <= 12){
                img.setAttribute('src','imagens/bebem.png')
            }else if (idade <= 25){
                img.setAttribute('src','imagens/jovemm.png')
            }else if (idade <= 50){
                img.setAttribute('src','imagens/mulher.png')
            }else {
                img.setAttribute('src','imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} Anos`
        res.appendChild(img)
    }
}