// todo - memanggil element dari html
const body = document.querySelector('body');
const container =document.getElementsByClassName('container')[0]
const rgbBox = container.getElementsByClassName('rgb-box')[0]

const redBox = document.getElementsByClassName('red')[0]
const greenBox = document.getElementsByClassName('green')[0]
const blueBox = document.getElementsByClassName('blue')[0]

const redInput = document.getElementsByClassName('redInput')[0]
const greenInput = document.getElementsByClassName('greenInput')[0]
const blueInput = document.getElementsByClassName('blueInput')[0]

const kotakHasil = document.getElementsByClassName('kotak-hasil')[0]
const generate = container.getElementsByClassName('generate')[0]
// todo - merubah nilai atribut
function setAttribute(element, min, max){
    element.setAttribute('min', min)
    element.setAttribute('max', max)

}
setAttribute(redInput, '0', '255')
setAttribute(greenInput, '0', '255')
setAttribute(blueInput, '0', '255')
// redInput.setAttribute('min','0')
// redInput.setAttribute('max','255')
// blueInput.setAttribute('min','0')
// blueInput.setAttribute('max','255')
// greenInput.setAttribute('min','0')
// greenInput.setAttribute('max','255')

// todo - mengatur nilai default atribut
let red = 0, green = 0, blue = 0;
redInput.value = red
greenInput.value = green
blueInput.value = blue

redBox.style.backgroundColor= `red`
greenBox.style.backgroundColor= `green`
blueBox.style.backgroundColor= `blue`

// todo - menggunakan evenlistener untuk merubah nilai
redInput.addEventListener('input', function() {
    red = redInput.value
    container.style.backgroundColor = `rgb(${red},${green},${blue})`
    redBox.style.backgroundColor= `rgb(${red},${green = 0},${blue= 0})`
})

greenInput.addEventListener('input', function() {
    green = greenInput.value
    container.style.backgroundColor = `rgb(${red},${green},${blue})`
    greenBox.style.backgroundColor= `rgb(${red = 0},${green},${blue= 0})`
})

blueInput.addEventListener('input', function() {
    blue = blueInput.value
    container.style.backgroundColor = `rgb(${red},${green},${blue})`
    blueBox.style.backgroundColor= `rgb(${red = 0},${green = 0},${blue})`
})


generate.addEventListener('click', function(){
    const hasil = document.createElement('div')
    hasil.classList.add('hasil')

    const warna = document.createElement('div')
    warna.classList.add('warna')
    hasil.appendChild(warna)
    warna.style.backgroundColor= `rgb(${red},${green},${blue})`

    const rgb = document.createElement('div')
    rgb.classList.add('rgb')
    hasil.appendChild(rgb)
    rgb.innerHTML = `<p>rgb(${red},${green},${blue})</p>`

    kotakHasil.appendChild(hasil)


})