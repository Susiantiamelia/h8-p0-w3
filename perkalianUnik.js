function perkalianUnik(arr) {
  var arr2=[]
  var kali = 1
  for(a=0; a < arr.length; a++){
    kali = kali*arr[a]; //buat hitung jumlah kali isi Array
  }
  var hasil = []
  for(b=0; b < arr.length; b++){
    var bagi = kali/arr[b]
    hasil.push(bagi)
    
  }
  return hasil;
}