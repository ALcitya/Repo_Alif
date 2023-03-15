let condition
const tambah = function (a, b){
    let hasilTambah = a + b
    alert(hasilTambah)
    condition = confirm("ulang?")
}
const kurang = function (a, b){
    let hasilKurang = a - b
    alert(hasilKurang)
    condition = confirm("ulang")
}
const kali = function (a ,b){
    let hasilKali = a*b
    alert(hasilKali)
    condition = confirm("ulang")
}
const bagi = function (a,b){
    let hasilBagi = a/b
    alert(hasilBagi)
    condition = confirm("ulang?")
}

const program = function (pilihanPerhitungan){
    input1=parseInt(prompt("Nilai 1"))
    input2=parseInt(prompt("Nilai 2"))
    switch(parseInt(pilihanPerhitungan)){
        case 1:
            alert(`Hasil dari ${input1} + ${input2} adalah ${tambah(input1, input2)}`);
            break
        case 2:
            alert(`Hasil dari ${input1} - ${input2} adalah ${kurang(input1, input2)}`);
            break
        case 3:
            alert(`Hasil dari ${input1} * ${input2} adalah ${kali(input1,input2)}`);
            break
        case 4:
            alert(`Hasil dari ${input1} / ${input2} adalah  ${bagi(input1,input2)}`)
            break
        default:
            alert("Pilihan perhitungan belum tersedia")
    }
}
let pilihanPerhitungan=prompt("Masukkan pilihan perhitungan")
do{
    program(pilihanPerhitungan)
}while(condition)

