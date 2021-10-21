<script setup>
import { ref } from '@vue/reactivity';
import { defineAsyncComponent } from '@vue/runtime-core';
import HelloWorld from './components/HelloWorld.vue';
import Init from './components/init.vue'
// import LifeCycle from './components/lifeCycle.vue'
// 穿梭窗口
import TeleportDialog from './components/teleportDialog.vue'
// 异步组件
const AsyncLifeCycle = defineAsyncComponent(()=>import('./components/lifeCycle.vue'))
// suspense
import SuspenseBox from './components/SuspenseBox.vue'
const flag = ref(true)
function deleteNode(){
  flag.value = false
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <Init/><br/>
  <!-- <LifeCycle v-if="flag"/> -->
  <AsyncLifeCycle v-if="flag"/>
  <button @click="deleteNode">销毁</button><hr/>
  <SuspenseBox/><hr/>
  <TeleportDialog/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
