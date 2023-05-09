// todo - membuat tebak angka v-3
// todo - membuat variabel kesempatan,percobaan, ulang
let kesempatan; 
let percobaan = 3;
let ulang;

const random = function() {
    let angka = [1,2,3,4,5,6,7,8,9,0]
    let random_index = Math.floor(Math.random() * angka.length -1)
    return angka[random_index]
}
const game = function(user_input, comp_input){
    console.log({user_input, comp_input})
    if(user_input === comp_input){
        alert("selamat anda menebak dengan benar")
        kesempatan +1
        ulang = true
    }else{
        alert("coba lagi")
        kesempatan -1;
        ulang = true
    }
    if(kesempatan >=5){
        return kesempatan = 5
    }
    if(kesempatan === 0){
        alert("Permainan berakir, terimakasih telah bermain")
        ulang = confirm("ulang?")
    }
}
do{
    kesempatan = percobaan
    alert(`Kamu punya ${kesempatan} x kesempatan`)
    const input = prompt("Masukkan angkamu")
    game(parseInt(input),random())
    console.log(random())
}while(ulang)