<!--
 * @Author: zhang_gen_yuan
 * @Date: 2022-09-12 22:42:37
 * @LastEditTime: 2022-09-12 23:02:26
 * @Descripttion: 
-->
# Breadcrumb 面包屑

![alt](./../../public/component/breadcrumb.png)


<details>
<summary>查看代码</summary>

```vue
<template>
  <Breadcrumb :breadList="breadList"></Breadcrumb>
  <Breadcrumb :breadList="breadList" separator="-"></Breadcrumb>
  <Breadcrumb :breadList="breadList" separatorIcon="jinggao"></Breadcrumb>
</template>

<script lang="ts" setup>
import { Breadcrumb } from "zgy-ui";
import { ref } from 'vue'
const breadList = ref([{name:"系统管理"},{name:"人员管理"}])
</script>
```

</details>

## Attributes

| 参数| 说明 |可选值|类型|默认值| 是否必填|
|-----| ----|-----|---|-------|----|
| breadList| RouteProps[] |-|RouteProps[] |-|是|
| separator| 分隔 |-| string | / |否|
| separatorIcon| 自定义分隔Icon |-| string |-|否|

## RouteProps

| 参数| 说明 |可选值|类型|默认值| 是否必填|
|-----| ----|-----|---|-------|----|
| name| 名称 |-| string |-|是|
| path| 跳转路径 |-| string |-|否|
| replace| router.replace |-| boolean |false|否|
| exact| 开启严格模式 |-| boolean |false|否|
| query| 路由传参 |-| any |-|否|