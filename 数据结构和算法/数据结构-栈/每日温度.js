/* 
题目描述: 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。

例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。 */

//维护递减栈

function dailyT (T){
  const len = T.length
  const res = new Array(len).fill(0)
  const stack = []
  for(let i = 0;i < len;i++){
      while(stack.length && T[stack[stack.length-1]] < T[i]){
        const top = stack.pop()
        res[top] = i-top
      }
      stack.push(i)
  }
  return res
}
console.log(dailyT([73, 74, 75, 71, 69, 72, 76, 73]))