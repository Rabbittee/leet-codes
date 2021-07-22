class Solution {
public:
    bool isValid(string s) {
        std::stack<char> myStack; // create stack to store left close
        if(s.length() < 2) return false; // if length < 2 must not close
        
        // loop whole string
        for(int i = 0;i<s.length();i++){
            // if stack is empty and got left close, push in than continue next loop, else invalid
            if(myStack.size() == 0){
               if(isLeft(s[i])>=0){
                myStack.push(s[i]);
                continue;
               }else{
                   return false;
               }
            }
            // get check s[i] is left than push to stack and continue;
            if(isLeft(s[i])>=0) {
                myStack.push(s[i]);
                continue;
            }
            // s[i] is not left close so need to check previous one is left close.
            // not parentness return false
            int topIsLeft = isLeft(myStack.top());
            if(topIsLeft >= 0){
                if(!(isRight(s[i]) == topIsLeft)){
                    return false;
                }else{
                    myStack.pop();
                }
            }
        }
        // finally stack size not empty means not all left close has right
        if(myStack.size() == 0){
            return true;
        }
        return false;
    }
    // check type of close
    // if c in left close, return index of close, else return -1
    int isLeft(char c){
        char* leftClose= {"({["};
        int index = -1;
        for(int i =0;i<3;i++){
            if(leftClose[i] == c)return i;
        }
        return -1;
    }
    int isRight(char c){
        char* rightClose= {")}]"};
        int index = -1;
        for(int i =0;i<3;i++){
            if(rightClose[i] == c)return i;
        }
        return -1;
    }
};