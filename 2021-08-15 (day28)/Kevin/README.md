# Remove Duplicates from Sorted Array

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

**Custom Judge**:

The judge will test your solution with the following code:

```
int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```

If all assertions pass, then your solution will be accepted.

## Solutions

-   解法一

跑迴圈，遇到目前索引的值等於前一個索引的值的時候，把目前索引位置取出 (splice) 即可。

-   解法二

1. 宣告額外的 `i`，作為新陣列的索引位置
2. 跑迴圈，遇到目前索引的值 **不等於** 前一個索引的值的時候，把陣列 `i` 的位置的值指定為目前迴圈的索引位置的值，並且 `i++`。
