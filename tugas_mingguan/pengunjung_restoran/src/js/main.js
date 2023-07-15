const input = document.getElementById('penggunjung')
const daftarPenggunjung = document.getElementsByClassName('daftar-penggunjung')[0]
const button = document.getElementsByClassName('button')[0]
let hasil = document.querySelector('.tambah')
let hitungan = 0

button.addEventListener('click', ()=>{
    let listPenggunjung = document.createElement('div')
    listPenggunjung.classList.add('list-penggunjung')
    listPenggunjung.innerHTML = input.value
    daftarPenggunjung.appendChild(listPenggunjung)
    hitungan = hitungan +1

    hasil.innerHTML = hitungan
    console.log(hitungan)

})