function pasanganTerbesar(num){
  var save = num.toString()
  var arr = []
  for(var a=0; a < save.length-1; a++){
    var couple = save[a]+save[a+1]
    arr.push(couple)
  }
  arr.sort(function(i,j) { return i < j });
  var hasil = arr[0]
  return hasil;
}