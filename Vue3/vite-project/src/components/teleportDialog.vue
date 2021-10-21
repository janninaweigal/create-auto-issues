<template>
  <button @click="isShow = true">出现弹窗</button>
  <Teleport to="body">
    <div class="mask" v-show="isShow">
      <div class="modal">
        <button @click="isShow = false">隐藏弹窗</button>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from "@vue/reactivity";
let isShow = ref(false)
</script>

<style>
.mask{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background:rgba(0, 0, 0, 0.4);
}
.modal{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 300px;
  height: 300px;
  background-color: #fff;
  text-align: center;
}
</style>