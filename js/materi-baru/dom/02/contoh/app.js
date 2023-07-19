const section = document.getElementById('sesi-1')
const button = document.querySelector('button')
const container = section.querySelector('container-2')

let nama = "amix"

section.innerHTML = `<h1>Hallo ${nama}</h1>`
section.style.textAlign = 'center'
section.style.color= 'green'
button.setAttribute('type', 'button')
section.getAttribute('id')
// container.removeAttribute('class')

console.log(container)

console.log(button)

console.log(section)