<!--
 * @Author: zhang_gen_yuan
 * @Date: 2022-09-11 19:02:06
 * @LastEditTime: 2022-09-12 10:32:38
 * @Descripttion:
-->

# Col

<!-- ![alt](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-c8839397-1901-47d6-a4b0-c8723a5ba7c1/8575d123-a647-49c4-a226-7d33ad757006.png) -->

![alt](./../../public/component/col.png)

<details>
<summary>查看代码</summary>

```vue
<template>
  <Row :gutter="[10, 20]">
    <Col :span="2" class="col">2</Col>
    <Col :span="4" class="col">4</Col>
    <Col :span="6" class="col">6</Col>
    <Col :span="12" class="col">12</Col>
  </Row>
</template>

<script setup>
import { Row, Col } from "zgy-ui";
</script>
<style lang="scss">
.col {
  height: 100px;
  background: #ccc;
}
</style>
```

</details>

## Attributes

| 参数| 说明 |可选值|类型|默认值| 是否必填|
|-----| ----|-----|---|-------|----|
| span| 宽度 | number<0-24> |number|- |是|
