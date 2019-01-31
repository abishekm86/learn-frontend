## Git
  **Git source code:** https://github.com/git/git \
  **Git documenation & books:** https://git-scm.com/doc \
  **Bitbucket Git tutorial:** https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud

## Setup
  We use the rebase workflow (https://www.atlassian.com/git/tutorials/merging-vs-rebasing).

  **Install git:** `brew install git` \
  **Setup:** https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup \
  **Auto push to remote:** `git config --global push.default current` \
  **Auto-rebase on pull:** `git config --global branch.autosetuprebase always` \
  **Create new branch that tracks master:** `git config --global alias.br 'checkout --track origin/master -b'` \
  **Set VSCode as defualt editor:** `git config --global core.editor "code --wait"`

## Tools
  **Git prompt:** https://github.com/magicmonty/bash-git-prompt \
  **Git completion:** https://github.com/git/git/blob/master/contrib/completion/git-completion.bash \
  **VSCode extension:** https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens

## Rebase workflow
```
  git clone <url>
  git br your-name/branch-name
  git add *
  git commit -m "foo"
  git pull
  git rebase -i
  git push -f
```

