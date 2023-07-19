// const Siswa1 = {
//     ussername : "Andika",
//     alamat : "kembangarum"
//  }
// console.log(Siswa1.ussername)
// todo - untuk memanggil isi dari objek

// console.log(Siswa1)
// todo - untuk memanggil seluruh isi dari object

const Mahasiswa={
    ussername:"Rehan",
    nim:9489394909,
    getData:function(){
        console.log(this.ussername)
        console.log(this.nim)
        // todo - untuk mengambil nilai di dalam object
    }
}
Mahasiswa.getData();
// ? - jika datanya dimasukkan kedalam suatu variabel, maka untuk memanggilnya
// ? - pertama sebutkan nama objectnya lalu nama function

const array = [
    {
        ussername:"Jimy",
        alamat:"london"
    },
    {
        ussername:"Aldi",
        alamat:"Tlogo"
    },
    {
        ussername:"Rian",
        alamat:"kebonsari"
    }
]

array.map((item, index) =>{
    console.log(`Nama = ${item.ussername}, Alamat ${item.alamat}`)
    // ? - untuk memanggil isi dari object yang berada di dalam array
})