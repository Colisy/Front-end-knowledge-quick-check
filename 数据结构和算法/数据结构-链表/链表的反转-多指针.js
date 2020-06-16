/* 真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。

示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL */
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
const reverseList = function(head) {
  let pre = null
  let cur = head
  while(cur !== null){
    // 防止丢失，先存起来
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
};
log(JSON.stringify(reverseList(node1)))