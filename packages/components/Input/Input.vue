<template>
  <div v-if="type!=='textarea'"
       :class="[
        'gr-Input',
        isFocus && 'focus',
        disabled && 'disabled',
        size]"
  >
    <slot name="prefix">
      <gr-icon v-if="prefix" :size="size" :name="prefix"></gr-icon>
    </slot>
    <input
      v-model="model"
      @focus="handleFocus"
      @blur="handleBlur"
      :type="showPwd?'text':type"
      :placeholder="placeholder"
      :disabled="disabled"
      v-bind="$attrs"
    >
    <gr-icon name="reeor" :size="size" v-if="clearable && String(model).length" @click="cleanValue"></gr-icon>
    <gr-icon :name="showPwd?'eye-close':'eye'" :size="size" v-if="type==='password'"
             @click="showPwd=!showPwd"></gr-icon>
    <slot name="suffix">
      <gr-icon v-if="suffix" :size="size" :name="suffix"></gr-icon>
    </slot>
  </div>
  <div class="gr-textarea-wrap" v-else>
    <textarea
      :class="[
         'gr-input',
         'textarea',
         showCount && max && 'has-count',
         disabled && 'disabled',
         size]"
      @focus="handleFocus"
      @blur="handleBlur"
      v-model="model"/>
    <span class="count" v-if="showCount && max">{{modelValue?.length}}/{{max}}</span>
  </div>
</template>
<script lang='ts' setup>
import GrIcon from "grace-ui/components/Icon";
import {computed, defineComponent, ref} from "vue";
import './Input.scss'
defineOptions({
  name:'GrInput'
})
const props=withDefaults(defineProps<{
  prefix?:string
  suffix?:string
  modelValue?:string|number|Date
  disabled?:boolean
  size?:'large'|'middle'|'small',
  showCount?:boolean
  max?:number
  clearable?:boolean
  placeholder?:string
  trim?:boolean
  autofocus?:boolean
  type?:'textarea'|'text'|'number'|'password'
}>(),{
  size:"middle",
  placeholder:'请输入',
  type:'text'
})

function formatMoney(money: number, precision = 2, splitDesc = ',') {
  precision = +precision
  const str = money.toFixed(precision)
  const reg = str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g
  return str.replace(reg, '$1' + splitDesc)
}
const emit=defineEmits<{
  (event:'update:modelValue',data:string|number|Date):void
  (event:'focus',data:Event):void
  (event:'blur',data:Event):void
}>()
const model=computed({
  get(){
    return props.modelValue
  },
  set(value){

    emit('update:modelValue',value||'')
  }
})
const isFocus=ref(false)
const showPwd=ref(false)
const height=computed(()=>{
  if(props.type==='textarea') return `unset`
  return props.size
})
const handleFocus=(e:Event)=>{
  isFocus.value=true
  emit('focus',e)
}
const handleBlur=(e:Event)=>{
  isFocus.value=false
  emit('blur',e)
}
const cleanValue=()=>{
  model.value=''
}
</script>
