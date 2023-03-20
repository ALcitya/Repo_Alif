let number = [1,3,7,4,8,5,9,4]
let number2 = [1,11,32,21,3,5,12,5]
// let hasil = number.reduce(function (a,b){
//     return a*b
// })
// console.log(hasil)
// ? - untuk mengambil nilai sebelum dan sesudah lalu menjalankan sesuai perintah
// ? - bisa untuk perintah matematika (+,-,/,*)
hasil = number2.sort(function(a, b){
    return a-b;
})
console.log(hasil)