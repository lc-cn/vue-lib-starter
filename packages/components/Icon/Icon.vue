<template>
  <i :class="[
      'gr-Icon',
      'gr-Icon-'+name,
      ['large','middle','small'].includes(size) && size
  ]"
  :style="styles"/>
</template>
<script lang='ts' setup>
import {computed} from 'vue'
import './Icon.scss'
defineOptions({
  name: 'GrIcon'
})
const props=withDefaults(defineProps<{
  name:string
  size?:'large'|'middle'|'small'|`${number}${'px'|'%'}`|number
}>(),{
  name:'',
  size:'middle'
})
const styles=computed(()=>{
  if(typeof props.size==='string' && ['large','middle','small'].includes(props.size)) return {}
  return {
    fontSize:typeof props.size==='number'||!props.size.endsWith('px')?props.size+'px':props.size
  }
})
</script>
