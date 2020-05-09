/* 
请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy。则经过替换之后的字符串为We%20Are%20Happy。
*/
function replaceSpace(str) {
  return str.split(' ').join('%20');
}

function replaceSpace(str) {
  return str.replace(/\s+/g, '%20'); //多个空格
}
/* 
输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student."，则输出"student. a am I"。
*/
function ReverseSentence(str) {
  if (!str) {
    return ''
  }
  return str.split(' ').reverse().join(' ');
}
/* 
字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如输入字符串"abcdefg"和数字2，该函数将返回左旋转2位得到的结果"cdefgab"。
*/
function LeftRotateString(str, n) {
  if (str && n != null) {
    return (str + str).substr(n, str.length)
  } else {
    return ''
  }
}