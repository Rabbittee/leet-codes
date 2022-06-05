func containsDuplicate(nums[]int) bool {
  duplicateMap:= make(map[int]int)

  for i := 0; i < len(nums); i += 1 {
    duplicateMap[nums[i]] += 1;
    if duplicateMap[nums[i]] > 1 {
      return true
    }
  }
  return false
}