<template>
  x坐标： {{point.x}}
  y坐标： {{point.y}}<br/>
</template>

<script>
import usePoint from '../hooks/usePoint'
export default {
  setup(props) {
    const point = usePoint();
    return {
      point
    }
  }
}
</script>