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
node5.next = node2
const hasCycle = function(head) {
  while(head){
    if(head.flag){
      return true
    }else{
      head.flag = true
      head = head.next
    }
  }
  return false
};
log(hasCycle(node1))

