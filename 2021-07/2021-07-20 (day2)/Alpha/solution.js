var isPalindrome = function(x) {
  if ( x >= 0 ) {
      let ans = '';
      let origin = x;
      const max = Math.pow(2, 31);
      x = x.toString();
      let rev = [];
      for (i=0; i<x.length; i++ ) {
          rev.unshift(x[i]);
      }
      ans = parseInt(rev.join(""));
      if (ans === origin) {
          if (ans <= max) {
              return true;
          }
      }else {
        return false;
      } 
  } else {
      return false;
  }
};