const arr = ["ayam geprek", "ayam penyet", "nasi kebuli","nasi babat"]
let size =10

const keyword = prompt("Masukkan Menu")
const data = []

arr.map(function(item){
    if(keyword.toLocaleLowerCase() === item.toLocaleLowerCase() ||item.toLocaleLowerCase().includes
    (keyword.toLocaleLowerCase())){
        data.push(item)
    }
})

for (let i = 0; i < data.length; i ++) {
    console.log(data[i])
}

// for(let i = 0; i < arr.length; i++) {
//     if (keyword === arr[i]) {
//         console.log(arr[i]);
//     } else {
//         console.log("data tidak ditemukan");
//     }
// }