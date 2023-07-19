const input = document.getElementById('penggunjung')
const aula = document.getElementsByClassName('daftar-penggunjung')[0]
const button = document.getElementsByClassName('button')[0]
let hasil = document.querySelector('.tambah')
let hitungan = 0

aula.addEventListener('click', function (event){
    const item = event.target.parentElement
    const parent = item.parentElement
    
    if(item.classList.contains("btn-deleted")){
        parent.remove()
        hitungan -=1
        hasil.innerHTML= hitungan;
    }
    if(item.classList.contains("btn-edit")){
        const text = item.previousSibling.previousSibling.textContent;
        input.value = text
        hitungan -= 1
        console.log(text)
        parent.remove()
    }
    if(item.classList.contains("btn-checked")){
        parent.classList.toggle('list-checked')
    }


})

button.addEventListener('click', ()=>{
    if(input.value != ""){
        let listPenggunjung = document.createElement('div')
        listPenggunjung.classList.add('list-penggunjung')
        listPenggunjung.innerHTML = `<p>  ${input.value} </p>`
        aula.appendChild(listPenggunjung)
        hitungan = hitungan +1
        hasil.innerHTML = hitungan

        const btnCheck = document.createElement('button')
        btnCheck.classList.add ('btn-checked')
        btnCheck.innerHTML =`<i class="fa-solid fa-check"></i>`
        listPenggunjung.appendChild(btnCheck)
        
        const btnEdit = document.createElement('button')
        btnEdit.classList.add ('btn-edit')
        btnEdit.innerHTML ='<i class="fa-solid fa-pen-to-square"></i>'
        listPenggunjung.appendChild(btnEdit)
    
        const btnDeleted = document.createElement('button')
        btnDeleted.classList.add ('btn-deleted')
        btnDeleted.innerHTML ='<i class="fa-solid fa-trash"></i>'
        listPenggunjung.appendChild(btnDeleted)

        input.value =""
    }
    
})