function cariMean(arr){
  var sum = 0
  for(a=0; a<arr.length; a++){
    sum = sum + arr[a];
  }
  var mean = Math.round(sum/arr.length)
  return mean;
}
