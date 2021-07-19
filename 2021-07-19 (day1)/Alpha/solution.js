var reverse = function(x) {
  let ans = ''
  let max = Math.pow(2,31)
    if(x===0) {
        return 0;
    }else if(x>0) {
      x = x.toString();
      let rev = [];
      for(i=0;i<x.length;i++) {
        rev.unshift(x[i])
      }
      ans =  parseInt(rev.join(""));
      if(ans < max){
        
      return ans
      }else{
        return 0
      }
    }else if(x<0) {
      x = Math.abs(x);
      x = x.toString();
      let rev_p = [];
      for(i=0;i<x.length;i++) {
        rev_p.unshift(x[i])
      }
      ans = parseInt(rev_p.join(""));
      if(ans < max){
        
      return -ans
      }else {
        return 0
      }
    }
};