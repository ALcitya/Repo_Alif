let percobaan = 3
let kesempatan
let ulang

const nilaiRandom = () => {
    const number = [0, 1, 2,3,4,5,6,7,8,9]
    const indexRandom = Math.floor(Math.random() * number.length -1)
    number.sort(() => Math.random() - 0.5)
    return number[indexRandom]
};
const hasilGame= (user, comp) => {
    console.log({user,comp})
    if(user === comp){
        alert(
            `Selamat anda menebak dengan benar,\n nilai yang kamu pilih (${user}).\n dan nilai dari computer adalah (${comp})`
        )
        ulang = confirm("Bermain kembali")
        return (kesempatan = 0)
    }
    if(user < comp){
        if(comp - user <= 3 && comp - user > 1){
            alert(`Angkamu terlalu kecil.\n Namun sudah mendekati`)
        }else if(comp - user <= 1){
            alert(`Angkamu terlalu kecil,\n Namun sudah sangat dekat`)
        }else{
            alert(`Angkamu terlalu kecil`)
        }
    }
    if(user > comp){
        if(user - comp <= 3 && user - comp > 1){
            alert(`Angka kamu terlalu besar,\n namun sudah dekat`)
        }else if(user - comp >= 1){
            alert(`Angka kamu terlalu besar,\n namun sudah sangat dekat`)
        }else{
            alert(`Angka kamu terlalu besar`)
        }
    }

    kesempatan--;
    if(kesempatan === 0){
        alert(`Game selesai! \n Kamu tidak bisa menebak dengan benar.\n Angka komputer adalah (${comp})`)
    ulang = confirm("Coba Lagi")
    }
};
do{
    let compNilai = nilaiRandom();

    kesempatan = percobaan;

    while(kesempatan > 0){
        if (kesempatan === percobaan){
            hasilGame(parseInt(prompt(`Masukkan nilai yang kamu tebak`)), compNilai)
        }else {
            hasilGame(parseInt(prompt(`Masukkan angka yang kamu tebak, tersisa (${kesempatan} kesempatam)`)), compNilai);
        }

    }
}while (ulang)