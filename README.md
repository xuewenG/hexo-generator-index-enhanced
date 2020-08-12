# Hexo 主页生成器增强版

在默认的主页生成器的基础上添加了在主页上隐藏文章的功能，可选的隐藏方式有：

- 在文章的 Front-matter 中添加 `hidden_from_index: true`，隐藏对应的文章
- 在 _config.yml 中修改配置，隐藏指定分类或标签下的文章

例如：

Front-matter:

```
---
title: 文章标题
date: 2020-06-30 13:09:58
categories:
  - Linux
tags:
  - Linux
hidden_from_index: true
---

文章正文
```

_config.yml:

```yaml
index_generator:
  path: ''
  per_page: 10
  order_by: -date
  exclude:
    categories:
      - easy
    tags:
      - linux
```
