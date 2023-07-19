let jumlah = prompt("masukkan jumlah perulangan");
let number;
for(let i=0; i<jumlah; i++){
    number = prompt("masukkan nomer angkot");
    
    if(number %2 == 0){
        alert(`angkot dengan nomer ${number} beroprasi dengan baik`);
    }else {
        alert(`angkot dengan nomer ${number} tidak beroprasi dengan baik`);
    }
}