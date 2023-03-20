function computer(random){
    let comp = random;
    if(comp < 3){
        return "gajah";
    }
    else if(comp > 3 && comp <=6){
        return"manusia";
    }
    else{
        return"semut"
    }
}
let comp = computer(Math.round(Math.random() * 10));
let user = prompt ("Masukkan pilihan (semut, manusia, gajah");
function game(){
    let hasil;
    if(comp=== user){
        hasil ="Seri"
    }
    else if(comp=== "gajah" && user === "semut"){
        hasil ="Kamu menang"
    }
    else if(comp==="semut" && user === "gajah"){
        hasil ="Komputer menang"
    }
    else if(comp==="manusia" && user === "semut"){
        hasil ="Komputer menang"
    }
    else if(comp==="semut" && user === "manusia"){
        hasil ="Kamu menang"
    }
    else if(comp==="gajah" && user === "manusia"){
        hasil = "Komputer menang"
    }
    else if(comp==="manusia" && user === "gajah"){
        hasil ="Kamu menang"
    }
    return hasil
}
function gameresult(userselect, compselect, result){
    alert(`Kamu memilih ${userselect} dan komputer memilih ${compselect} maka hasilnya adalah ${result}`)
}
gameresult(user, comp, game(user, comp))