/* 真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

示例： 给定一个链表: 1->2->3->4->5, 和 n = 2.
当删除了倒数第二个结点后，链表变为 1->2->3->5.
说明： 给定的 n 保证是有效的。 */
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
// 实际之走了一个循环，时间复杂度为 n
const removeNthFromEnd = function(head, n) {
  const dummy = new ListNode()
  dummy.next = head
  let fast = dummy
  let slow = dummy
  // 先走n步
  while(n !== 0){
    fast = fast.next
    n--
  }
  // 一起走
  while(fast.next){
    slow = slow.next
    fast = fast.next
  }
  // 删掉
  slow.next = slow.next.next
  return head
};
log(JSON.stringify(removeNthFromEnd(node1,2)))
