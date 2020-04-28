# git
- git rebase
  1. 合并多次提交纪录
  2. 分支合并（与merge比起来记录更干净）

      >首先，git 会把 feature1 分支里面的每个 commit 取消掉；
      <br>
      其次，把上面的操作临时保存成 patch 文件，存在 .git/rebase 目录下；
      <br>
      然后，把 feature1 分支更新到最新的 master 分支；
      <br>
      最后，把上面保存的 patch 文件应用到 feature1 分支上；

      合并冲突：`git rebase --continue`

      放弃合并：`git rebase —abort`（分支会回到 rebase 开始前的状态）

  ⚠️使用 rebase 来清理本地工作，千万不要尝试着对那些已经被发布的提交进行这个操作。
- log/reset/reflog

