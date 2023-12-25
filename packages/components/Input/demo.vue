<template><gr-input v-model="inputValue"/>input:{{inputValue}}<br/>
  <gr-input v-model="inputValue" type="password"/>input:{{inputValue}}<br/>
  <gr-input v-model="inputValue" prefix="search"/>input:{{inputValue}}<br/>
  <gr-input v-model="inputValue" suffix="home"/>input:{{inputValue}}<br/>
  <gr-input v-model="inputValue" prefix="search" suffix="home"/>input:{{inputValue}}<br/>
  <gr-input v-model="inputValue" prefix="search" suffix="home"/>input:{{inputValue}}<br/>
  <gr-input v-model="inputValue" type="password" prefix="search" suffix="home" clearable/>input:{{inputValue}}<br/>
</template>
<script lang='ts' setup>
import GrInput from './Input.vue'
import {ref} from "vue";
defineOptions({
  name: 'InputDemo'
})
const inputValue=ref('')
</script>
<style>
</style>
