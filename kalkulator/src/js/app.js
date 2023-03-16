let condition
const tambah = function (a, b){
    let hasilTambah = a + b
    alert(`Hasil dari ${a} + ${b} adalah ${hasilTambah}`)
    condition=confirm("Ulangi dari awal?")
}
const kurang = function (a, b){
    let hasilKurang = a - b
    alert(`Hasil dari ${a} - ${b} adalah ${hasilKurang}`)
    condition=confirm("Ulangi dari awal?")
}
const kali = function (a ,b){
    let hasilKali = a*b
    alert(`Hasil dari ${a} * ${b} adalah ${hasilKali}`);
    condition=confirm("Ulangi dari awal?")
}
const bagi = function (a,b){
    let hasilBagi = a/b
    alert(`Hasil dari ${a} / ${b} adalah  ${hasilBagi}`)
    condition=confirm("Ulangi dari awal?")
}

const program = function (pilihanPerhitungan){
    input1=parseInt(prompt("Nilai 1"))
    input2=parseInt(prompt("Nilai 2"))
    switch(parseInt(pilihanPerhitungan)){
        case 1:
            tambah(input1,input2);
            break
        case 2:
            kurang(input1,input2);
            break
        case 3:
            kali(input1,input2);
            break
        case 4:
            bagi(input1,input2);
            break
        default:
            alert("Pilihan perhitungan belum tersedia")
    }
}
do{
let pilihanPerhitungan=prompt("Masukkan pilihan perhitungan")
    program(pilihanPerhitungan)
}while(condition)

