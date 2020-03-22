function changeVocals (str) {
    //code di sini
    let dictionary = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let output = ''
    for(i=0;i<str.length;i++){
        for(j=0;j<dictionary.length;j++){
            if(str[i]===dictionary[j] && (str[i]==='a' || str[i]==='i' || str[i]==='u' || str[i]==='e' || str[i]==='o' || str[i]==='A' || str[i]==='I' || str[i]==='U' || str[i]==='E' || str[i]==='O')){
                output += dictionary[j+1]
            }else if(str[i]===dictionary[j]){
                output += dictionary[j]
            }
        }
    }
    return output
}
  
function reverseWord (str) {
    //code di sini
    let output = ''
    for(i=str.length-1;i>=0;i--){
        output += str[i]
    }
    return output
}

function setLowerUpperCase (str) {
    //code di sini
    let dictionary = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let output = ''
    for(i=0;i<str.length;i++){
        for(j=0;j<dictionary.length;j++){
            if(str[i]===dictionary[j]){
                if(j>=0 && j<=25){
                    output += dictionary[j+26]
                }else{
                    output += dictionary[j-26]
                }
            }
        }
    }
    return output
}

function removeSpaces (str) {
    //code di sini
    let output = ''
    for(i=0;i<str.length;i++){
        if(str[i]!==' '){
            output += str[i]
        }
    }
    return output
}

function passwordGenerator (name) {
    //code di sini
    if(name.length<5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }else{
        let output = removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
        return output
    }    
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
