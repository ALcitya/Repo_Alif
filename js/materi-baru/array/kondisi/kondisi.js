const arr = [] 

for(let i = 0; i<5; i++){
     arr[i] = prompt("Masukkan Umur ")
   }
for(let j=0; j<arr.length; j++){
     if(arr[j] <= 5){
        alert(`Anda berumur ${arr[j]} dan masuk kategori balita`)
     }
     else if(arr[j] > 5 && arr[j]<= 10){
        alert(`Anda berumur ${arr[j]} dan masuk kategori anak-anak`)
     }
     else if(arr[j] > 10 && arr[j] <= 20){
        alert(`Anda berumur ${arr[j]} dan masuk kategori remaja`)
     }
     else if(arr[j] > 20 && arr[j] <=40 ){
        alert(`Anda berumur ${arr[j]} dan masuk kategori dewasa`)
     }
     else if(arr[j] > 40 && arr[j] <= 60){
        alert(`Anda berumur ${arr[j]} dan masuk kategori tua`)
     }
     else if(arr[j] > 60 && arr[j] <= 80){
        alert(`Anda berumur ${arr[j]} dan masuk kategori manula`)
     }
     else{
        alert(`Anda berumur ${arr[j]} dan masuk kategori tua sekali `)
     }
}

