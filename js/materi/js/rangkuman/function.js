// ? - untuk mengurutkan nomor 
hasil = number2.sort(function (a, b) {
  return a - b;
});
// ? - akan mengembalikan nilai tanpa menampilkan

// todo - menampilkan output di console
console.log()

// todo - menginputkan nilai 
let input = prompt("Masukkan input")
// ! - prompt hanya akan mengembalikan nilai string, karena itu perlu diubah nilainya
let comp = random()
let user = input()
game(user , comp)

// ? - ketika suatu nilai function sudah dipanggi dengan perintah console.
// ? - maka cukup memanggil kembali nama function tsb

const abc = function(){
  let result = 3
 console.log(result)
}
abc()

// ? - ketika suatu nilai function dipanggil dengan perintah return, 
// ? - maka perlu dipanggil kembali function tsb dengan perintah console
const nilai = function(){
  let result = 5
  return result
}
console.log(nilai())