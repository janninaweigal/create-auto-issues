import { reactive } from '@vue/reactivity'
import { onMounted, onUnmounted } from '@vue/runtime-core';
export default function () {
  const point = reactive({
    x: 0,
    y: 0
  })

  // 方法
  function savePoint(event) {
    point.x = event.pageX;
    point.y = event.pageY;
  }
  onMounted(() => {
    window.addEventListener('click', savePoint)
  })
  onUnmounted(() => {
    console.log('---unmounted----')
    window.addEventListener('click', savePoint)
  })
  return point
}