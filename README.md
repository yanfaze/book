解决方法
1. 检查本地是否有 SSH 密钥
在 PowerShell 或 Git Bash 里运行：
Apply to .travis.yml
如果有 id_rsa 和 id_rsa.pub，说明已经生成过密钥。
2. 如果没有密钥，生成一个
Apply to .travis.yml
一路回车即可。
3. 把公钥添加到 GitHub
打开 ~/.ssh/id_ed25519.pub（或 id_rsa.pub），复制里面的内容。
登录 GitHub，进入 SSH and GPG keys 页面，点击 New SSH key，粘贴进去保存。
4. 测试 SSH 连接
Apply to .travis.yml
如果看到 Hi <username>! You've successfully authenticated... 就说明配置成功。
