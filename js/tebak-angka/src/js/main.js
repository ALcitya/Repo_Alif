function random(){
    const number = [0,1,2,3,4,5,6,7,8,9]
    number.sort(function(){
        return Math.random() - 0.5
    })
   let index_random = Math.floor(Math.random() * number.length - 1)
   return number[index_random]
}
function input(){
    let nilai = prompt("Masukkan Angka yang kamu tebak")
    return parseInt(nilai)
}
const game = function(user_input, comp_input){
    if(user_input === comp_input){
        alert("Selamat anda benar")
    }
    else{
        alert("maaf anda salah")
    }
}
let comp = random()
console.log(comp)
let user = input()
game(user , comp)