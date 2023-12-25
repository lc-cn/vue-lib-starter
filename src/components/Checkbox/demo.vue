<template>
  <div>
    <gr-checkbox v-model="checkboxValue1">是否成年</gr-checkbox>
    选中值：{{ checkboxValue1 }}
    <br>
    指定true/false值
    <gr-checkbox v-model="checkboxValue2" true-value="成年" false-value="未成年">是否成年</gr-checkbox>
    选中值：{{ checkboxValue2 }}
    <br>
    size
    <gr-checkbox v-model="checkboxValue1" size="small" label="是否成年"/>
    <gr-checkbox v-model="checkboxValue1" label="是否成年"/>
    <gr-checkbox v-model="checkboxValue1" size="large" label="是否成年"/>
  </div>
  成组使用
  <div>
    <gr-checkbox v-model="checkboxValue3" :options="options"/>
    选中值：{{ checkboxValue3 }}
  </div>
  垂直排列
  <div>
    <gr-checkbox v-model="checkboxValue3" vertical :options="options"/>
    选中值：{{ checkboxValue3 }}
  </div>
  约束选项数量(最多3项，最少2项)
  <div>
    <gr-checkbox v-model="checkboxValue3" :min="2" :max="3" :options="options"/>
    选中值：{{ checkboxValue3 }}
  </div>
</template>
<script lang='ts' setup>
import GrCheckbox from './Checkbox.vue'
import {ref} from "vue";

defineOptions({
  name: 'CheckboxDemo'
})
const checkboxValue1 = ref(false);
const checkboxValue2 = ref('成年')
const checkboxValue3=ref(['banana'])
const options = ref([
  {
    label: '香蕉',
    value: 'banana'
  },
  {
    label: '苹果',
    disabled: true,
    value: 'apple'
  },
  {
    label: '橙子',
    value: 'orange'
  },
  {
    label: '芒果',
    value: 'mango'
  },
  {
    label: '葡萄',
    value: 'grape'
  }
])
</script>
<style>
</style>
