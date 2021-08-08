/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *   public:
 *     // Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     bool isInteger() const;
 *
 *     // Return the single integer that this NestedInteger holds, if it holds a single integer
 *     // The result is undefined if this NestedInteger holds a nested list
 *     int getInteger() const;
 *
 *     // Return the nested list that this NestedInteger holds, if it holds a nested list
 *     // The result is undefined if this NestedInteger holds a single integer
 *     const vector<NestedInteger> &getList() const;
 * };
 */

class NestedIterator
{
public:
    queue<int> integers; // store flat intgers
    NestedIterator(vector<NestedInteger> &nestedList)
    {
        flatNested(nestedList, &integers);
    }

    int next()
    {
        int value = integers.front();
        integers.pop();
        return value;
    }

    bool hasNext()
    {
        return !integers.empty();
    }
    /**
     * @brief create a store flat integers store in queue.
     * 
     * @param nestedList nested integer need to flat
     * @param q[output] a pointer for store flat intger
     */
    void flatNested(vector<NestedInteger> &nestedList, queue<int> *q)
    {
        for (int i = 0; i < nestedList.size(); i++)
        {
            if (!nestedList[i].isInteger())
            {
                flatNested(nestedList[i].getList(), q);
            }
            else
            {
                q->push(nestedList[i].getInteger());
            }
        }
    }
};

/**
 * Your NestedIterator object will be instantiated and called as such:
 * NestedIterator i(nestedList);
 * while (i.hasNext()) cout << i.next();
 */