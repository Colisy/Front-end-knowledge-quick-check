/* 真题描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明: 1 ≤ m ≤ n ≤ 链表长度。

示例:
输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL */
const {log} = console
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
const node5 = new ListNode(5)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
const reverseBetween = function(head, m, n) {
  const dummy = new ListNode()
  dummy.next = head
  let pre,cur,start,leftHead,p
  p = dummy
  // 执行 m-1 次,走到倒序开始前
  for(let i=0;i<m-1;i++){
    p = p.next
  }
  leftHead = p
  start = p.next
  pre = p.next
  cur = p.next.next
  // 走 n-m 步，倒序完成
  for(let i=m;i<n;i++){
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  leftHead.next = pre
  start.next = cur
  return head
};
log(JSON.stringify(reverseBetween(node1,2,4)))