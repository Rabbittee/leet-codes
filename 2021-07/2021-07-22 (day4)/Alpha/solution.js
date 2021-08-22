/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  let stack = [];
  let arry = s.split("");
  if(arry.length%2!=0||arry[0]==")"||arry[0]=="}"||arry[0]=="]"){
      return false
  }else {
      for(i=0; i< arry.length; i++) {
          const str = arry[i]
      switch (str) {
          case "{":
          case "(":
          case "[":
              stack.push(arry[i]);
              break;
          case "}":
              if (stack[stack.length-1] == "{") {
                  stack.pop();
                  break;
              } else {
                  stack.push(arry[i])
                  break;
              }
          case "]":
              if (stack[stack.length-1] == "[") {
                  stack.pop();
                  break;
              } else {
                  stack.push(arry[i])
                  break;
              }
          case ")":
              if (stack[stack.length-1] == "(") {
                  stack.pop();
                  break;
              } else {
                  stack.push(arry[i])
                  break;
              }
      }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
  }
};