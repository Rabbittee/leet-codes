/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const splitPath = path.split("/");
    const stackAddress = [];
    let answer = "";
    
    for (let i = 0 ; i < splitPath.length ; i++) {
        if (!splitPath[i] || splitPath[i] === ".") {
            continue;
        }
        if (splitPath[i] === "..") {
            stackAddress.pop();
            continue;
        }
        stackAddress.push(splitPath[i]);
    }
    
    for (let i = 0 ; i < stackAddress.length ; i++) {
        answer = answer + "/" + stackAddress[i];
    }
    
    return answer || "/";
};