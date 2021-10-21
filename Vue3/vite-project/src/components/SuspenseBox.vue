<template>
  <Suspense>
    <template v-slot:default>
      <div>
        这是正常加载的内容<br/>
      <Point/>
        </div>
    </template>

    <template v-slot:fallback>
      加载中....
    </template>
  </Suspense>
</template>

<script setup>
import Point from './lifeCycle.vue'

</script>