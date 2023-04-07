<!--
 * @Author: zhang_gen_yuan
 * @Date: 2022-09-11 23:49:46
 * @LastEditTime: 2022-09-12 10:31:22
 * @Descripttion: 
-->
# Image 图片

<!-- ![alt](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c8839397-1901-47d6-a4b0-c8723a5ba7c1/bbbe4769-b22f-48c5-b535-66f671e4d514.png) -->
![alt](./../../public/component/image.png)

<details>
<summary>查看代码</summary>

```vue
<template>
  <Image v-for="(item,index) in list" :key="item" :src="item" :preview-list="list" :index="index"/>
</template>

<script lang="ts" setup>
import { Image } from "zgy-ui";
import { ref } from "vue";

const list = ref([
  'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/616301c0e08640e791a0ca886c0810ca~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?','https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f2f46ca30881488a984fc11853652169~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?'
])

</script>
```

</details>

## Attributes
| 参数| 说明 |可选值|类型|默认值| 是否必填 |
|-----| ----|-----|---|-------|----|
| src| 图片地址 | - |string|- | 是 |
| fit| 对图片进行剪切 | object-fit属性【fill,contain,cover,scale-down,none,initial,inherit】 |string|- |否|
| alt| 原生属性 | - |string|- |否|
| loading| loading | - |boolean|- |否|
| previewList| 图片地址数组 | - |string[]|- |否|
| index| 数组下标 | - |number| 0 |否|
| closeEscape| 是否键盘Esc关闭 | - |boolean| true |否|