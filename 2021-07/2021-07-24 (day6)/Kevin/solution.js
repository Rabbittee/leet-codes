/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const array = s.split("");
    let length = 0;
    let temp = [];
    array.forEach((current, index) => {
        // * 如果遇到重複的字...
        if (temp.indexOf(current) !== -1) {
            // * 判斷目前得到的長度是不是先前存的紀錄更長
            length = length < temp.length ? temp.length : length;

            // * 既然遇到重複，就要把存入的重複字(包含該字)以前的內容刪除
            temp = temp.slice(temp.indexOf(current) + 1);
        }

        // * 走到最後一個的時候... (也沒有遇到重複的字)
        else if (index === array.length - 1) {
            // * 因為還沒 push ，現在 temp 不包含原資料的最後一個字，所以長度需要 +1
            const currentLength = temp.length + 1;
            length = length < currentLength ? currentLength : length;
        }

        // * 最後 push 進去可以避免前面篩選到這個可能重複的字
        temp.push(current);
    });
    return length;
};
