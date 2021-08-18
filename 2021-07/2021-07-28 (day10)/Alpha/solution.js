/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
  let str = "";
  const romals = {
      1000: "M",
      900: "CM",
      500: "D",
      400: "CD",
      100: "C",
      90: "XC",
      50: "L",
      40: "XL",
      10: "X",
      9: "IX",
      5: "V",
      4: "IV",
      1: "I"
  }; 


  for(let i=Object.keys(romals).length; i>=0; i--) {
    while(num>=Object.keys(romals)[i]){
      num-=Object.keys(romals)[i];
      str+=romals[Object.keys(romals)[i]];
    }
  }

  return str;
};