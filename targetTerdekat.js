function targetTerdekat(arr) {
  var x = []
  var hasil = []
  var hitung;
  var akhir;
 for(var a=0; a < arr.length; a++){
   if(arr[a] === 'o'){
     var o = a
   }
   else if(arr[a] === 'x'){
     x.push(a)
   }
 } 
 if(x.length === 0){
   akhir = 0
   return akhir;
 }

for(var b=0; b < x.length; b++){
  hitung = Math.abs(x[b] - o)
  hasil.push(hitung)
}

for(var c=0; c < hasil.length; c++){

  for(var d=0; d < hasil.length; d++){
    if(hasil[c] < hasil[d]){
      var temp = hasil[d]
      hasil[d] = hasil[c]
      hasil[c] = temp
    }
  }
}
akhir = hasil[0]

return akhir;
}