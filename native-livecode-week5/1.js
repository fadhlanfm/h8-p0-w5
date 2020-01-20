/**
 * Elementalist Battle.
 * 
 * Function akan menerima input berupa object player dan array berisi serangan yang akan dihadapi player tersebut. 
 * Seorang player memiliki nama, health, dan element. 
 * -health : merupakan nyawa dari pemain, dari  0 - 100
 * -element: merupakan elemen dari pemain
 * 
 * Terdapat 3 jenis element: wind, fire, dan water.
 * Tiap elemen memiliki DAMAGE yang sama yaitu 25
 * Berikut ini aturan untuk elemen tersebut:
 * 
 * -fire bisa memberikan damage kepada wind    fire > wind
 * -water bisa memberikan damage fire          water > fire
 * -wind bisa memberikan damage water          wind > water
 * 
 * 
 * Selain 3 itu, tidak ada efeknya, misal untuk kasus water:
 * water tidak bisa memberikan damage kepada wind
 * water tidak bisa memberikan damage kepada water
 * 
 * -Jika health player sudah 0, maka keluarkan output "Player `name` meninggal"
 * -Jika health player masih ada, maka output object player tersebut
 * 
 * RULES:
 *  - Tuliskan Pseudocode kalian, No pseudocode = 0 !!!
 *  - Dilarang menggunakan .filter .reduce .in
 */

/* pSEudocode

PROCEDURE elementBattle
  READ player as object{name as string, health as number, element as string}, attacks as array of string
  FOR each attacks DO
    IF player's element is 'fire' AND selected attack is 'water' THEN
      player.health decreases to 25
    ELSE IF player's element is 'water' AND selected attack is 'wind' THEN
      player.health decreases to 25
    ELSE IF player's element is 'wind' AND selected attack is 'fire' THEN
      player.health decreases to 25
    END IF
  END FOR

  IF player's health is more than 0 THEN
    RETURN player
  ELSE
    RETURN player's name is meninggal
  END IF
END PROCEDURE

*/

function elementBattle(player, attacks) {
  // your code here
  var element = player.element;
  for(i=0;i<attacks.length;i++){
    if(element=='fire' && attacks[i]=='water'){
        player.health -= 25
    }else if(element=='water' && attacks[i]=='wind'){
      player.health -= 25
    }else if(element=='wind' && attacks[i]=='fire'){
      player.health -= 25
    }
  }

  if(player.health>0){
    return player

  }else{
    return 'Player '+ player.name +' meninggal'
  }
   }

console.log(elementBattle({
  name: "Aang",
  health: 100,
  element: "wind"
}, ["water", "fire", "fire", "wind"]));
//{ name: 'Aang', health: 50, element: 'wind' }

console.log(elementBattle({
  name: 'Zuko', 
  element: "fire",
  health: 100
}, ['water','water','water','water','water']))
// Player Zuko meninggal

console.log(elementBattle({
  name: 'Katara', 
  element: "water", 
  health: 35
}, ['water','fire', 'wind', 'wind', 'wind']))
// Player Katara meninggal