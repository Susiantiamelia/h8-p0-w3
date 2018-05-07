function groupAnimals(animals) {

  animals.sort(function(value1, value2) { return value1 > value2 });
  var hasil = [] 
  var cek=true 
  
  for(var a= 0; a < animals.length; a++){ 
    if(hasil.length === 0){
      hasil.push([animals[a]]);
    }
    else{
      for(var b=0; b < hasil.length; b++){ 
              for(var c= 0; c < hasil[b].length; c++){ 
          
          if(animals[a][0] === hasil[b][c][0]){
            hasil[b].push(animals[a])
            cek= false 
            break; 
          }
         
        }
       
       
      }
      if(cek !== false){
          hasil.push([animals[a]])
      }
        
      cek=true
    }
  }
   return hasil;
  
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]