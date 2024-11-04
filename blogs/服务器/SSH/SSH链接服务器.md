---
title: github配置令牌
date: 2019-10-01
tags:
 - InterNetPenetration
categories:
 - server
---
<Boxx/>

# github配置令牌

**使用 GitHub 个人访问令牌（Personal Access Token）**

1. **生成个人访问令牌：**
   - 登录 GitHub，访问 [个人访问令牌生成页面](https://github.com/settings/tokens)。
   - 点击 **Generate new token**。
   - 在 **Select scopes** 中，确保勾选 `repo` 以允许访问和推送代码到你的仓库。
   - 设置好过期时间和其他选项，点击 **Generate token**。
   - 复制生成的令牌（注意：这个令牌只显示一次，生成后必须保存好）。
2. **在 Git 中配置访问令牌：** 在你推送代码时，Git 会提示你输入 GitHub 的密码，你需要将生成的个人访问令牌替代原来的 GitHub 密码。



![1728442399862](/assets/1728442399862.png)

![1728442416882](/assets/1728442416882.png)

![1728442376368](/assets/1728442376368.png)

# 配置linux 的ssh的的公钥生效

确保远程服务器允许使用 SSH 密钥进行登录。你可以通过检查服务器上的 `/etc/ssh/sshd_config` 文件，确保以下设置是正确的：

- `PasswordAuthentication`：应该设置为 `no`，以确保优先使用公钥认证。

  ```
  bash复制代码PasswordAuthentication no
  ```

- `PubkeyAuthentication`：应该设置为 `yes`。

  ```
  bash复制代码PubkeyAuthentication yes
  ```

- 然后，重新启动 SSH 服务：

```
bash复制代码sudo systemctl restart sshd
```



