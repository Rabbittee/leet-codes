// method 1
var maxArea = function(height) {
    let maxContains = 0;
    let containsLength = height.length;
    let modifyLeft = 0;
    let modifyRight = containsLength -1;
    
    for (let i = 0 ; i < containsLength ; i++) {
        
        let left = height[i];
        
        if (height[modifyLeft] > left) continue;
        
        for (let j = modifyRight ; j > i ; j--) {
            
            let right = height[j];
            if (height[modifyRight] > right) continue;
            
            let lowerHeight = left > right ? right : left;
            let tmpContains = (j - i) * lowerHeight
            if (tmpContains > maxContains) {
                modifyLeft = i;
                modifyRight = j;
                maxContains = tmpContains;
            }
        }
    }
    
    return maxContains;
};

// method 2 (Better)
var maxArea = function(height) {
    
    let left = 0;
    let right = height.length - 1;
    let maxContains = 0;
    
    while(left < right) {
        let lowerSide = height[left] > height[right] ? height[right] : height[left];
        let tmpContains = (right - left) * lowerSide;
        maxContains = tmpContains > maxContains ? tmpContains : maxContains;
        
        if (height[left] <= height[right]) {
            left++;
            continue;
        }
        if (height[left] > height[right]) {
            right--;
            continue;
        }
       
    }
    
    return maxContains;
};