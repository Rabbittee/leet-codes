/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    let stack = []
    let i = 0
    let pathAry = path.split('/')
    while(i < pathAry.length){
        if(pathAry[i] === '..'){
            stack.pop()
        }
        else if(pathAry[i] !== '.' && pathAry[i] !== ''){
            stack.push(pathAry[i])
        }
        i++
    }
    return '/' + stack.join('/') 
};