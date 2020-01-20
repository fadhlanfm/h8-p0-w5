/**
 * Buatlah sebuah function yang akan mengambil input berupa array multidimensi berisi kumpulan angka.
 * Function akan mencari nilai mean, modus, max dari masing-masing array di dalam array multidimensi tersebut.
 * Masing-masing mean, modus, dan max dari array-array tersebut akan disimpan di dalam 1 array.
 * 
 * Jika terdapat 2 modus di dalam 1 array, maka modus di array tersebut adalah modus yang terkecil!!!
 * 
 * contoh input: [[1,2,3,4], [5,6,5,7]]
 * contoh output:[[mean, modus, max], [mean,modus,max]]
 *               [ [ 2.5, 1, 4 ], [ 5.75, 5, 7 ] ]
 * 
 * Rules:
 * -Dilarang menggunakan built-in function selain .push()
 * 
 */

function mean(array){
    let sum = 0;
    for(i=0;i<array.length;i++){
        sum += array[i]
    }
    return sum/array.length;
}

function sort(array){
    for(i=0;i<array.length;i++){
      for(j=i;j<array.length-i-1;j++){
        var tmp = array[j]
        array[j] = array[j+1]
        array[j+1] = tmp
      }
    }
    return array
  }
  
  function modus(array){
    let sortedArray = sort(array)
    let listFreq = {}
    for(i=0;i<array.length;i++){
        if(!(array[i] in listFreq)){
          listFreq[array[i]] = 1  
        }else{
          listFreq[array[i]]++
        }
    }
    console.log(listFreq)
  
    var max = 0
    for(key in listFreq){
      if(max<listFreq[key]){
        max=listFreq[key]
      }
    }
    
    for(key in listFreq){
      if(listFreq[key]==max){
        var modus = key
      }
    }
  
    return modus
  }
  
  console.log(modus([2,2,2,4,5,6,8,9]))
  

function max(array){
    for(i=0;i<array.length;i++){}
}

function findSpecials(array) {
    
for(i=0;i<array.length;i++){
    var sum = 0;
    var counter = 0;
    var max =0;
    var cariModus = []
    for(j=0;j<array[i].length;j++){
        var subOutput = []
        sum =+ array[i][j]
        counter ++

        if(max==0){
            max=array[i][j]
        }else if(max<array[i][j+1]){
            max=array[i][j+1]
        }
        
        if(cariModus.length==0){
            cariModus.push(1 ,array[i][j])
        }

        for(k=0;k<cariModus.length;k++){
            var found = false
            if(cariModus[k][1]==array[i][j]){
                cariModus[k][0]++
                found = true
            }else if(!found){
                cariModus.push(1 ,array[i][j])
            }
        }
        subOutput.push(sum/counter)
        console.log(cariModus)
    }

}


}


//test-cases
console.log(findSpecials([[2,2,2,4,5,6,8,9],[2,2,2,0,9],[3,4,5,8,8,8,3,3,2,10]]));
//[ [ 4.75, 2, 9 ], [ 3, 2, 9 ], [ 5.4, 3, 10 ] ]

console.log(findSpecials([[1,2,3,4], [5,6,5,7]]))
//[ [ 2.5, 1, 4 ], [ 5.75, 5, 7 ] ]