/*
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。 
示例：
  给定 nums = [2, 7, 11, 15], target = 9
  因为 nums[0] + nums[1] = 2 + 7 = 9
  所以返回 [0, 1] 
*/
var twoSum = function (nums, target) {
  const map = {};
  if (Array.isArray(nums)) {
    for (let i = 0; i < nums.length; i++) {
      if (map[target - nums[i]] != undefined) {
        return [map[target - nums[i]], i];
      } else {
        map[nums[i]] = i;
      }
    }
  }
  return [];
};