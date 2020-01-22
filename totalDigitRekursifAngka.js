function sumOfDigits(number) {
    let strNumber = number.toString()
    let firstInt = parseInt(strNumber[0])
    if(strNumber.length===1){
        return firstInt
    }else{
        let x = ''
        for(i=1;i<strNumber.length;i++){
            x += strNumber[i]
        }
        let newNumber = parseInt(x)
        return firstInt += sumOfDigits(newNumber)
    }
}

// TEST CASES
console.log(sumOfDigits(512)); // 8
console.log(sumOfDigits(1542)); // 12
console.log(sumOfDigits(5)); // 5
console.log(sumOfDigits(21)); // 3
console.log(sumOfDigits(11111)); // 5