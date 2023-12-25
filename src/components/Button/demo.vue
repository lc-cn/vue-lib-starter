<script setup lang="ts">
import GrButton from 'grace-ui/components/Button'
</script>

<template>
  <div>
    <gr-button>default</gr-button>
    <gr-button type="info">info</gr-button>
    <gr-button type="info" icon="eye">info</gr-button>
    <gr-button type="primary">primary</gr-button>
    <gr-button type="warn">warn</gr-button>
    <gr-button type="error">error</gr-button>
  </div>
  <div>
    <gr-button plain>default</gr-button>
    <gr-button plain type="info">info</gr-button>
    <gr-button plain type="primary">primary</gr-button>
    <gr-button plain type="warn">warn</gr-button>
    <gr-button plain type="error">error</gr-button>
  </div>
  <div>
    <gr-button circle>default</gr-button>
    <gr-button circle type="info">info</gr-button>
    <gr-button circle type="primary">primary</gr-button>
    <gr-button circle type="warn">warn</gr-button>
    <gr-button circle type="error">error</gr-button>
  </div>
  <div>
    <gr-button circle plain>default</gr-button>
    <gr-button circle plain type="info">info</gr-button>
    <gr-button circle plain type="primary">primary</gr-button>
    <gr-button circle plain type="warn">warn</gr-button>
    <gr-button circle plain type="error">error</gr-button>
  </div>
  <div>
    <gr-button type="primary" size="small">primary</gr-button>
    <gr-button type="primary">primary</gr-button>
    <gr-button type="primary" size="large">primary</gr-button>
  </div>
  <div>
    <gr-button circle type="primary" size="small">primary</gr-button>
    <gr-button circle type="primary">primary</gr-button>
    <gr-button circle type="primary" size="large">primary</gr-button>
  </div>
</template>
