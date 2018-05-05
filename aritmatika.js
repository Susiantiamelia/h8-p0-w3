function tentukanDeretAritmatika(arr){
  var arr2= []
  for(var a=arr.length-1; a > 0; a--){
    var kurang = arr[a] - arr[a-1]
    arr2.push(kurang)
  }
  var hasil = true
  for(var b=0; b < arr2.length-1; b++){
    if(arr2[b] !== arr2[b+1]){
      hasil = false
    }
  }
  return hasil;
}