# Input 输入框

## Attributes

| 参数| 说明 |可选值|类型|默认值| 是否必填|
|-----| -------|-----|---|-------|----|
| placeholder| 占位符 | - |string | - |否|
| modelValue / v-model| 绑定值 | - |string/number | - |是|
| type| 原生属性[类型] | - |text，textarea 和其他 | text |否|
| label| 输入框的标题[类似于FormItem] | - |string | - |否|
| clearable| 是否可清空 | - |boolean | false |否|
| disabled| 是否禁用 | - |boolean | false |否|
| maxlength| 最大输入长度 | - |string / number | - |否|
| minlength| 最小输入长度 | - |string / number | - |否|
| max| 原生 max 属性，设置最大值 | - |- | - |否|
| min| 原生属性，设置最小值 | - | - | - |否|
| readonly| 原生  readonly 属性，是否只读 | - |boolean| false |否|