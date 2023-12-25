<template>
  <div :class="[
      'gr-Radio',
      options && 'group',
      vertical && 'vertical'
  ]">
    <label v-if="!options" :for="id">
      <input type="radio"
             :value="trueValue||value"
             :id="id"
             v-model="model"
      >
      <slot>{{label}}</slot>
    </label>
    <label :for="`${id}:${option.value}`" v-else v-for="option in optionsList">
      <input type="radio"
             :id="`${id}:${option.value}`"
             :value="option.value"
             :key="option.value"
             v-model="model"
      >
      <slot>{{option.label}}</slot>
    </label>
  </div>
</template>
<script lang='ts' setup>
import {computed} from "vue";
import './Radio.scss'

defineOptions({
  name:`GrRadio`
})
type Option= string|boolean|number|{
  label:string
  value:any
}

const emit=defineEmits<{
  (event:'update:modelValue',data:any):void
}>()
const props=withDefaults(defineProps<{
  id?:string
  disabled?:boolean
  modelValue?:any
  size?:'large'|'middle'|'small'
  value?:any
  vertical?:boolean
  trueValue?:any
  falseValue?:any
  options?:Option[]
  label?:string
}>(),{
  id(){
    return new Date().getTime().toString()
  },
  size:'middle',
  value:true,
  trueValue:true,
  falseValue:false
})
const optionsList=computed(()=>{
  return (props.options||[]).map(option=>{
    if(typeof option==='object') return option
    return {
      label:`${option}`,
      disabled:false,
      value:option
    }
  })
})
const model=computed({
  get(){
    return props.options?props.modelValue:props.modelValue===props.trueValue
  },
  set(value){
    if(props.options) return emit('update:modelValue',value)
    let result
    if(typeof value==="boolean") result=value?props.trueValue||true:props.falseValue||false
    else result=value===props.trueValue?props.trueValue:props.falseValue||false
    emit('update:modelValue',result)
  }
})
</script>
