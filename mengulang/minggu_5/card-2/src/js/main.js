const listChek = document.getElementsByClassName('true')
// const listFalse = document.getElementsByClassName('false')

const iconChecked = document.createElement("i");
iconChecked.classList.add("fa-solid")
iconChecked.classList.add("fa-check")
iconChecked.style.color ="springgreen";
console.log(iconChecked)

// const iconFalse = document.createElement("i");
// iconFalse.classList.add("fa-solid")
// iconFalse.classList.add("fa-xmark")
// iconFalse.classList.style.color = "red";
// console.log(iconFalse)

for (let i = 0; i < listChek.length; i++) {
    if (listChek[i].classList.contains("true")) {
        console.log(listChek[i])
            listChek[i].prepend(iconChecked.cloneNode(true))
    }
}