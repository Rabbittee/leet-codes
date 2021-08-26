class Solution
{
public:
    bool isValid(string s)
    {
        std::stack<char> myStack; // create stack to store left close
        map<char, int> leftClose = createLeftClose(); // create map of leftclose
        map<char, int> rightClose = createRightClose(); // create map of rightclose

        // if length < 2 must not close
        if (s.length() < 2)
            return false;
        for (int i = 0; i < s.length(); i++)
        {   
            // if s[i] is left close push into stack, next loop
            if (leftClose[s[i]])
            {
                myStack.push(s[i]);
                continue;
            }
            //s[i] is right but stakc size < 0, invalid
            if (!(myStack.size() > 0))
                return false;
            // pop one from left check it is pair ot not
            char left = myStack.top();
            myStack.pop();
            if (!(leftClose[left] == rightClose[s[i]]))
                return false;
        }
        // check stack is empty, if not means some left close not paired
        if (myStack.size() == 0)
        {
            return true;
        }
        return false;
    }
    map<char, int> createLeftClose()
    {
        map<char, int> leftClose;
        leftClose.insert(pair<char, int>('{', 1));
        leftClose.insert(pair<char, int>('[', 2));
        leftClose.insert(pair<char, int>('(', 3));
        return leftClose;
    }
    map<char, int> createRightClose()
    {
        map<char, int> rightClose;
        rightClose.insert(pair<char, int>('}', 1));
        rightClose.insert(pair<char, int>(']', 2));
        rightClose.insert(pair<char, int>(')', 3));
        return rightClose;
    }
};