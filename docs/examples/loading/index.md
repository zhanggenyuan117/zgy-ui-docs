<!--
 * @Author: zhang_gen_yuan
 * @Date: 2022-09-11 16:31:20
 * @LastEditTime: 2022-09-11 17:38:08
 * @Descripttion: 
-->
# Loading 加载

![alt](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c8839397-1901-47d6-a4b0-c8723a5ba7c1/b73a23ad-7569-4f3f-9642-0367ae1fb7f3.png)


<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
    <Button @click="click">Show Loading</Button>
  </div>
</template>

<script lang="ts" setup>
import { Button, Loading } from "zgy-ui";
const click = ()=>{
  Loading({show:true,text:'loading'})
}
</script>
```
</details>

## Attributes

| 参数| 说明 |可选值|类型|默认值| 是否必填 |
|-----| ----|-----|---|-------|------|
| show| 是否显示 | - | boolean |false|是|
| text| 文字描述 | - |string| '' |否|
| background| mask背景色 | - |string| - |否|
| color| 文字以及Icon颜色 | - |string| - |否|