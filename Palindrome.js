function palindrome(kata){
  var a = ''
  for(var i=kata.length - 1; i >=0; i--){
    a = a + kata[i]
  }
  
   if(kata === a){
    console.log('true');
  }
  else{
    console.log('false');
  }
  return '';
}
