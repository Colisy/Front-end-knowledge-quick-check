/* 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:
输入: 1->1->2
输出: 1->2
示例 2:
输入: 1->1->2->3->3
输出: 1->2->3 */
const {log} = console
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node1 = new ListNode(1)
const node2 = new ListNode(1)
const node3 = new ListNode(2)
const node4 = new ListNode(3)
const node5 = new ListNode(3)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

const deleteDuplicates = function(head) {
  let cur = head
  while(cur !== null && cur.next !== null){
    // 终止条件 
    if(cur.val === cur.next.val){
      cur.next = cur.next.next
    }else{
      cur = cur.next
    }
  }
  return head
};
log(JSON.stringify(deleteDuplicates(node1)))
