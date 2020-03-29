/* 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回-1（需要区分大小写）。 */
//字符串可以遍历
function FirstNotRepeatingChar(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
      return i;
    }
  }
  return -1;
}
/* 统计一个数字在排序数组中出现的次数。 */
//二分法
function GetNumberOfK(data, k) {
  if (data && data.length > 0 && k != null) {
    const firstIndex = getFirstK(data, 0, data.length - 1, k);
    const lastIndex = getLastK(data, 0, data.length - 1, k);
    if (firstIndex != -1 && lastIndex != -1) {
      return lastIndex - firstIndex + 1;
    }
  }
  return 0;
}

function getFirstK(data, first, last, k) {
  if (first > last) {
    return -1;
  }
  const mid = parseInt((first + last) / 2);
  if (data[mid] === k) {
    if (data[mid - 1] != k) {
      return mid;
    } else {
      return getFirstK(data, first, mid-1, k);
    }
  } else if (data[mid] > k) {
    return getFirstK(data, first, mid - 1, k);
  } else if (data[mid] < k) {
    return getFirstK(data, mid + 1, last, k);
  }
}

function getLastK(data, first, last, k) {
  if (first > last) {
    return -1;
  }
  const mid = parseInt((first + last) / 2);
  if (data[mid] === k) {
    if (data[mid + 1] != k) {
      return mid;
    } else {
      return getLastK(data, mid + 1, last, k);
    }
  } else if (data[mid] > k) {
    return getLastK(data, first, mid - 1, k);
  } else if (data[mid] < k) {
    return getLastK(data, mid + 1, last, k);
  }
}