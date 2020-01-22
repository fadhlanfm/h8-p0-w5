function kaliTerusRekursif(angka) {
    // you can only write your code here!
    let strAngka = angka.toString();
    let output = 1;
    while(strAngka.length>1){
        return output * kaliTerusRekursif(angka);
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6