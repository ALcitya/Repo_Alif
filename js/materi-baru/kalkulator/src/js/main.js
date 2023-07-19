let pilihan = prompt("Masukkan pilihan \n1.Penambahan \n2.Pengurangan \n3.Perkalian \n4.Pembagian")
let nilai_1 = parseInt(prompt("masukkan nilai pertama"));
let nilai_2 = parseInt(prompt("masukkan nilai dua"));
let hasil;

if(pilihan == 1){
    hasil = nilai_1 + nilai_2;
    alert(`Hasil pertambahan dari ${nilai_1} dan ${nilai_2} adalah ${hasil}`)
}
else if(pilihan == 2){
    hasil = nilai_1 - nilai_2;
    alert(`Hasil pengurangan dari ${nilai_1} dan ${nilai_2} adalah ${hasil}`)
}
else if(pilihan == 3){
    hasil = nilai_1 * nilai_2;
    alert(`Hasil perkalian dari ${nilai_1} dan ${nilai_2} adalah ${hasil}`)
}
else if(pilihan == 4){
    hasil = nilai_1 / nilai_2;
    alert(`Hasil pembagian dari ${nilai_1} dan ${nilai_2} adalah ${hasil}`)
}
