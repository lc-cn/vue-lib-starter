<template>
  <div :class="[
      'gr-Checkbox',
      options && 'group',
      vertical && 'vertical'
  ]">
    <label v-if="!options" :for="id">
      <input type="checkbox"
             :class="[
                 size
             ]"
             :value="trueValue||value"
             :disabled="disabled"
             :id="id"
             v-model="model"
      >
      <slot>{{label}}</slot>
    </label>
    <template :key="option.value" v-else v-for="option in optionsList">
      <label :for="`${id}:${option.value}`">
        <input type="checkbox"
               :class="[
                 size
             ]"
               :id="`${id}:${option.value}`"
               :value="option.value"
               :disabled="disabled || option.disabled ||
             (max && model.length>=max && !model.includes(option.value)) ||
             (min !==undefined && model.length<=min && model.includes(option.value))"
               :key="option.value"
               v-model="model"
        >
        <slot>{{option.label}}</slot>
      </label>
    </template>
  </div>
</template>
<script lang='ts' setup>
import {computed} from 'vue'
import './Checkbox.scss'
type Option= string|boolean|number|{
  label:string
  disabled?:boolean
  value:any
}
defineOptions({
  name:'GrCheckbox'
})
const emit=defineEmits<{
  (event:'update:modelValue',data:any):void
}>()
const props=withDefaults(defineProps<{
  id?:string
  disabled?:boolean
  vertical?:boolean
  max?:number
  min?:number
  modelValue?:any
  size?:'large'|'middle'|'small'
  value?:any
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
