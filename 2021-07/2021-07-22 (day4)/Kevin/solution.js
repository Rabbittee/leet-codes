/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // 儲存 尚未關閉的左括號
    let temp = [];
    // 儲存 結果
    let result = true;

    for (let i = 0; i < s.length; i++) {
        // 取得目前遍歷到的 item
        const item = s.split("")[i];
        switch (item) {
            case "(":
            case "[":
            case "{":
                temp.push(item);
                break;
            case ")":
                temp[temp.length - 1] !== "(" ? (result = false) : temp.pop();
                break;
            case "]":
                temp[temp.length - 1] !== "[" ? (result = false) : temp.pop();
                break;
            case "}":
                temp[temp.length - 1] !== "{" ? (result = false) : temp.pop();
                break;
        }
        if (!result) break;
    }

    // 需要判斷是否有剩下東西在 temp，若有剩下代表沒有正確關閉括號，回傳 false
    return temp.length === 0 ? result : false;
};
