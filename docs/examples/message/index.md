<!--
 * @Author: zhang_gen_yuan
 * @Date: 2022-09-11 16:31:20
 * @LastEditTime: 2022-09-11 18:57:05
 * @Descripttion: 
-->
# Message 消息提示

![alt](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c8839397-1901-47d6-a4b0-c8723a5ba7c1/ea2f467a-28e0-453c-9167-a053286740f0.png)

![alt](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c8839397-1901-47d6-a4b0-c8723a5ba7c1/ecd78935-be58-4e98-8751-ba34eeab3fa3.png)

![alt](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c8839397-1901-47d6-a4b0-c8723a5ba7c1/81d2070c-55a4-43e1-b1d8-390e1c4c8bfc.png)

![alt](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c8839397-1901-47d6-a4b0-c8723a5ba7c1/4f7269d4-f41a-4355-b0b0-4f64eea604b1.png)

<details>
<summary>查看代码</summary>

```vue
<template>
  <div>
    <Button @click="click">Show消息弹出框</Button>
  </div>
</template>

<script lang="ts" setup>
import { Button, MessageBox } from "zgy-ui";
const click = () => {
  MessageBox({ title:"警告",message: "删除该数据，是否继续？",confirmButtonText:"确认",cancelButtonText:"取消",showClose:true, cancel: () => {}, confirm: () => {} });
};
</script>
```
</details>

## Attributes

| 参数| 说明 |可选值|类型|默认值| 是否必填 |
|-----| ----|-----|---|-------|------|
| type| 消息类型 | 'success','warning','info','error' |string| 'success' |否|
| message| 主体信息 | - |string| '这是一条Message' |否|
| duration| 停留时长(毫秒) | - |number| 1500 |否|