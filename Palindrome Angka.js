function angkaPalindrome(num){
  while(true){
    num++
    var no = num.toString()
    var balik = '';
    for(var a=no.length-1; a >= 0; a--){
      balik = balik + no[a]
    }
    if(balik == num){
      return balik;
    }
  }
}