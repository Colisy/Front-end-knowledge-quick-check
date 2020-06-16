/* 真题描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。

示例： 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4 */

const {log} = console
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(4)
node1.next = node2
node2.next = node3

const node_1 = new ListNode(1)
const node_2 = new ListNode(3)
const node_3 = new ListNode(4)
node_1.next = node_2
node_2.next = node_3

const mergeTwoLists = function(l1, l2) {
  let head = new ListNode()
  let cur = head
  while(l1 && l2){
    if(l1.val < l2.val){
      cur.next = l1
      l1 = l1.next
    }else{
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  // l1 l2不等长
  cur.next = l1 !== null?l1:l2
  return head.next
};
log(JSON.stringify(mergeTwoLists(node1,node_1)))