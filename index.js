// let romanChart = {V:5000, MV:4000; M: 1000, CM: 900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1}
function convertToRoman(num) {
    let romanNumerals = ""
    while(num > 0){
      if(num < 4){
        romanNumerals += "I"
        num -= 1
      }
      else if(num == 4){
        romanNumerals += "IV"
        num -= 4
      }
      else if (num >= 5 && num < 9){
        romanNumerals += "V"
        num -= 5
      }else if(num === 9){
        romanNumerals += "IX";
        num -= 9;
      }else if(num >= 10 && num < 40){
       romanNumerals += "X";
       num -= 10
      }else if(num >= 40 && num < 50){
        romanNumerals += "XL";
        num -= 40
      }else if(num >= 50 && num < 90){
        romanNumerals += "L";
        num -= 50
      }else if(num >= 90 && num < 100){
        romanNumerals += "XC";
        num -= 90
      }else if(num >= 100 && num < 400){
        romanNumerals += "C";
        num -= 100
      }else if(num >= 400 && num < 500){
        romanNumerals += "CD";
        num -= 400
      }else if(num >= 500 && num < 900){
        romanNumerals += "D";
        num -= 500
      }else if(num >= 900 && num < 1000){
        romanNumerals += "CM";
        num -= 900
      }else if(num >= 1000 && num < 4000){
        romanNumerals += "M";
        num -= 1000
      }else if(num >= 4000 && num < 5000){
        romanNumerals += "MV";
        num -= 4000
      }
      else if(num >= 5000 && num < 10000){
        romanNumerals += "V";
        num -= 5000
      }
      else{
        romanNumerals += "_"
        num -= 1
       }
   }
    return romanNumerals
   }
   console.log(convertToRoman(9999));