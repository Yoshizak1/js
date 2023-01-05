function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.leght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByTagName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            var gênero = 'Homem'
            if (idade >= 0 && idade <10) {
                img.setAttribute('src', '/exercicios/exercicio015/img/foto-bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', '/exercicios/exercicio015/img/foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', '/exercicios/exercicio015/img/foto-adulto-m.png')
            } else {
                img.setAttribute('src', '/exercicios/exercicio015/img/foto-idoso-f.png')
            }
        } else if (fsex[1].checked) {
            var gênero = 'Mulher'
            if (idade >= 0 && idade <10) {
                img.setAttribute('src', '/exercicios/exercicio015/img/foto-bebe-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', '/exercicios/exercicio015/img/foto-jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', '/exercicios/exercicio015/img/foto-adulto-f.png')
            } else {
                img.setAttribute('src', '/exercicios/exercicio015/img/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    }
}