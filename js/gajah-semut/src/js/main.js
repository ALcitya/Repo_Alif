    const random = Math.round(Math.random()*10);
    let komputer;
        if(random <= 3){
            komputer = "semut";
        }else if(random > 3 && random <=6){
            komputer = "manusia";
        }else {
            komputer = "gajah";
        }
    const userinput = prompt("Masukkan pilahan (gajah, manusia, semut)");
    user = userinput.toLocaleLowerCase();

        if(komputer === user){
            alert("Seri")
        }
        else if(komputer === "gajah" && user === "semut"){
            alert("Kamu menang")
        }
        else if(komputer ==="semut" && user === "gajah"){
            alert("Komputer menang")
        }
        else if(komputer ==="manusia" && user === "semut"){
            alert("Komputer menang")
        }
        else if(komputer ==="semut" && user === "manusia"){
            alert("Kamu menang")
        }
        else if(komputer ==="gajah" && user === "manusia"){
            alert( "Komputer menang")
        }
        else if(komputer ==="manusia" && user === "gajah"){
            alert("Kamu menang")
        }