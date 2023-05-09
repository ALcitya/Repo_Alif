let ulang;
do{
    //todo - Menampung masukkan pengguna
    const user = prompt("Masukkan Pilihan (gajah, manusia, komputer");
    // todo - Membuat pilihan komputer
    const random = Math.round(Math.random()*10);
    
    // todo - Membuat perkondisian dari random komputer
    let komputer;
    if(random <= 3){
        komputer="semut";
    }else if(random >3 && random <=6){
        komputer="manusia";
    }else{
        komputer="gajah";
    }
    userinput = user.toLocaleLowerCase();
    kominput = komputer.toLocaleLowerCase();
    // todo - membuat kondisi pertemuan kedua pilihan
    if(userinput === "manusia" && kominput ==="gajah" || userinput==="semut" && kominput==="manusia"|| userinput==="gajah" && kominput==="semut"){
        alert(`Kamu memilih ${user} dan komputer memilih ${komputer} jadi komputer menang dan kamu kalah`);
    }
    else if(userinput === kominput){
        alert(`Kamu memilih ${user} dan Komputer memilih ${komputer} jadi hasilnya seri`)
    }
    else if(userinput==="gajah" && kominput ==="manusia" || userinput==="manusia" && kominput==="semut" || userinput==="semut" && kominput==="gajah"){
        alert(`Kamu memilih ${user} dan Komputer memilih ${komputer} jadi kamu menang dan komputer kalah`)
    }
    else{
        alert("Input yang kamu masukkan tidak sesuai")
    }
ulang = confirm("Apakah kamu ingin mengulang");
}while(ulang="y")
if (ulang="n"){
    alert("terimakasih telah bermain")
}