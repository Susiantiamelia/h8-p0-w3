// cara ka dimas
function groupAnimals(animals) {
  //sort animals
  animals.sort(function(value1, value2) { return value1 > value2 });
  var hasil = [] // untuk hasil
  var cek=true // untuk indikator penambahan group
  
  //untuk memproses semua isi animals satu persatu
  for(var a= 0; a < animals.length; a++){ // ini untuk masuk ke array
    //untuk memasukan isi animals pertama ke hasil
    if(hasil.length === 0){
      hasil.push([animals[a]]);
    }
    //setelah hasil memiliki isi maka dia mengecek atau membedakan animals
    else{
      // array untuk mengecek group yg dalam hasil
      for(var b=0; b < hasil.length; b++){ // masuk array dlam array
        
        // check isi group yg ada
        for(var c= 0; c < hasil[b].length; c++){ // masuk isi array dalam array
          
        // mengecek apa dia sudah sama dengan isi group yg ada
          if(animals[a][0] === hasil[b][c][0]){
            hasil[b].push(animals[a])// langsung masukin datanya ke group yg sama
            cek= false // kalo sama dia bakal berenti karena cek jadi false
            break; // break
          }
         
        }
       
       
      }
      // jika gak ada yg sama maka dia membuat group baru. keluar looping ke elsenya
      if(cek !== false){
          hasil.push([animals[a]])
      }
        
      // agar cek kembali jadi true
      cek=true
    }
  }
   return hasil;
  
}


// cara ka tian
function groupAnimals(animals) {
animals.sort(function(a,b){ return a > b})
var cek = []
var kategori = []

for(var a = 0; a < animals.length; a++){
  var index = kategori.indexOf(animals[a][0])
  if(index === -1){
     kategori.push(animals[a][0])
     cek.push([animals[a]])
  } else {
    cek[index].push(animals[a])
  }

}
return cek;
}




// cara lain buat nemu indexof pake looping dengan kondisi kayak target terdekat cuma default ganti -1