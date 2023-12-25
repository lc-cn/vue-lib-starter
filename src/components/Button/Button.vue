<template>
  <button
      class="gr-Button"
      :class="[
          loading && 'loading',
          type,
          size,
          plain && 'plain',
          circle && 'circle'
      ]"
  >
    <gr-icon v-if="loading" :size="size" name="loading"/>
    <gr-icon :name="icon" :size="size" v-if="!loading && icon"/>
    <template v-if="$slots.default && !circle"><slot></slot></template>
  </button>
</template>

<script lang="ts" setup>
import './Button.scss'
import GrIcon from 'grace-ui/components/Icon'
withDefaults(defineProps<{
  type:'default'|'warn'|'success'|'error'|'info'|'primary'
  plain?:boolean
  circle?:boolean
  icon?:string
  size?:'large'|'middle'|'small'
  loading?:string
}>(),{
  type:'default',
  size:'middle'
})
defineOptions({
  name: 'GrButton',
})
</script>
