function carregar () {
    var txth = document.getElementById("txth")
    var imgs = document.getElementById("img")

    var data = new Date()
    var horas = data.getHours()
    txth.innerHTML = `Agora sao ${horas} horas.`

    if (horas >= 6 && horas < 12) {
        imgs.src = 'imagens/pexels-saif-selim-641038.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (horas >= 12 && horas < 18) {
        imgs.src = 'imagens/pexels-anderson-martins-2386144.jpg'
        document.body.style.background = '#b9846f'
    } else if  (horas ) {
        imgs.src = 'imagens/pexels-pixabay-355465 (1).jpg'
        document.body.style.background = '#515154'

    }
}

