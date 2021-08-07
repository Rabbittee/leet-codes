class Solution {
public:
    struct CharIndex{
        char alphabet;
        int index;
    };
    
    int firstUniqChar(string s) {
        map<char,int> charsCount;
        queue<CharIndex> unRepeatIndex;

        for(int i=0;i<s.length();i++){
            // check if the char is already exist, if it is than add count and pop out from queue till no repeat
            if(charsCount[s[i]]){
                charsCount[s[i]]++;
                while(charsCount[unRepeatIndex.front().alphabet]>1){
                    unRepeatIndex.pop();
                }
            } else{
                // store count and push int queue
                charsCount[s[i]] = 1;
                CharIndex data;
                data.alphabet = s[i];
                data.index = i;
                unRepeatIndex.push(data);
            }
        }
        if(unRepeatIndex.size() > 0){
            return unRepeatIndex.front().index;
        }
        return -1;
    }
};