var agora = new Date()
var hora = agora.getHours()
var minagora = new Date()
var min = minagora.getMinutes()
console.log(`A hora atual é ${hora}:${min} `)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}