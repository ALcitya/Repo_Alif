//? - untuk mengetahui saldo akhir dari apa yang diiputkan user
//? - menentukan hari yang ada di laptop

// let nama = prompt("Masukkan nama kamu ");
// let saldo_awal = 10000000;
// let bonus = 3000000;
// let hutang = 500000;
// let saldo_akhir = saldo_awal + bonus - hutang;

// alert(`halo ${nama} saldo awal kamu sebesar Rp.${saldo_awal} dan bonus yang kamu punya sebesar Rp.${bonus},
//  hutang yang kamu masih punya sebesar Rp.${hutang}. Jadi saldo akhir kamu adalah Rp.${saldo_akhir}`);
const hari = ["Minggu","Senin","Selasa","Rabu", "Kamis","Jumat","Sabtu" ]

let tanggal= new Date()
let day=tanggal.getDate()
let hari_ini=tanggal.getDay()
    hari_ini=hari[hari_ini]
let y=tanggal.getYear()
let tahun=(y<200)?y+1900:y
console.log(`hari ini adalah hari ${tahun}`)