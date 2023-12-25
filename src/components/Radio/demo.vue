<template>
  <gr-radio v-model="checked" :options="options"/>
  <gr-radio v-model="checked" vertical :options="options"/>
</template>
<script lang='ts' setup>
import GrRadio from './Radio.vue'
import {ref, watch} from "vue";
defineOptions({
  name: 'RadioDemo'
})
const checked=ref('banana')
watch(checked,()=>{
  console.log(checked.value)
})
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
