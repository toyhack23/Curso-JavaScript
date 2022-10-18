function calcular(){
var txtvel = document.getElementById('txtvel')
var vel = Number(txtvel.value)
var res = document.getElementById('resultado')

    if (vel>=65){
        res.innerHTML = `<p>Sua velocidade é <strong>${vel} Km/h </strong>, diminua a velocidade!<p>`
    }

    else {
        res.innerHTML = `<p>Sua velocidade é <strong>${vel} Km/h!</strong><p>`
    }

}