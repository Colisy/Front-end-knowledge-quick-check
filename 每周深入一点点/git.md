# git
- git rebase
  1. 合并多次提交记录
  2. 分支合并

      合并冲突：`git rebase --continue`（一个记录一个记录去合并）

      放弃合并：`git rebase —abort`（分支会回到 rebase 开始前的状态）

      ⚠️使用 rebase 来清理本地工作，千万不要尝试着对那些已经被发布的提交进行这个操作。
      
      与merge的区别： 
      1. merge除原本两个分支的记录外会多出一条合并记录，rebase没有
      2. merge忽略中间的提交记录，直接采用最后一次提交进行比较，rebase是枚举每一次提交记录来比较，同一位置冲突可能解决多次
- log（之前记录）/reset/reflog（所有的记录）
- branch/checkout

  通过clone获取的远端git库，只包含了远端git库的当前工作分支。
  
  如果想获取其它分支信息，需要使用”git branch –r” 来查看。

  进行拉去用 git checkout -b 本地分支名 远程分支名 （本地分支名已经存在， 则不需要“-b”参数）
