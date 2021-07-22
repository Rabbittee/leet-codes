 var isValid = function(s) {
  let stack = [];
  let arry = s.split("");
  arry = arry.fliter(el => el);
  if(arry.length%2!=0||arry[0]==="("||arry[0]==="{"||arry[0]==="["){
      return false;
  }else {
      for(i==0; i< arry.length; i++) {
      let new = arry.pop();
      if (new === ")") {
          new = "(";
      } else if ( new === "}" ) {
          new = "{"
      } else if ( new === "]" ) {
          new = "["
      }
      if(new === arry[i-1])
      stack = stack.push(new);
  }
  
  return stack
  }

};