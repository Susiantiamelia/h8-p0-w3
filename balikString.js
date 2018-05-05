function balikString(string){
  var a = ''
  for(var i=string.length - 1; i >=0; i--){
    a = a + string[i]
  }
  return a
}

console.log(balikString('Hello World!'))