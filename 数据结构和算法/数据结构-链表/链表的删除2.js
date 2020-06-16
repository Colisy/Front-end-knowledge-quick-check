/* 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。

示例 1:
输入: 1->2->3->3->4->4->5
输出: 1->2->5
示例 2:
输入: 1->1->1->2->3
输出: 2->3 */
const {log} = console
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(3)
const node5 = new ListNode(4)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

const deleteDuplicates = function(head) {
  //dummy 站在前一位
  let dummy = new ListNode()
  dummy.next = head
  
  let cur = dummy
  while (cur.next && cur.next.next){
    if(cur.next.val === cur.next.next.val){
      const val = cur.next.val
      while(cur.next && cur.next.val === val){
        cur.next = cur.next.next
      }
    }else{
      cur = cur.next
    }
  }
  return head
};
log(JSON.stringify(deleteDuplicates(node1)))
