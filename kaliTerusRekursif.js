function kaliTerusRekursif(number) {
    let strNumber = number.toString();
  
    let resultCandidate = 1;
    for(i=0;i<strNumber.length;i++){
      let int = parseInt(strNumber[i])
      resultCandidate = resultCandidate * int
    }
  
    if(resultCandidate.toString().length==1){
      return resultCandidate
    }else{
      return kaliTerusRekursif(resultCandidate)
    }         
}
  
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6