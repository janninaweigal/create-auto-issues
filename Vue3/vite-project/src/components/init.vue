<template>
  <p>基础类型{{name}}</p>
  <p>对象{{obj}}</p>
  <button @click="add">+1</button>
  <div>
    {{person.firstName}} - {{person.lastName}}
  </div>
  <button @click="changeName">修改值</button>
  
</template>

<script>
import { computed, reactive, ref } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
// import { h } from '@vue/runtime-core'
export default {
  setup(props) {
    let name = ref(0)
    let obj = reactive({
      love:'喜欢'
    })
    let person = reactive({
      firstName: 'Lin',
      lastName: '斌',
      result: {}
    })
    //#region 
    // computed 简写
    person.fullName = computed(()=>{
      return person.firstName+person.lastName
    })

    // computed 完整写法
    person.fullName = computed({
      get(){
        return person.firstName+'-'+person.lastName
      },
      set(val){
        const arr = val.split('-')
        person.firstName = arr[0]
        person.lastName = arr[1]
      }
    })
    //#endregion

    //#region 
    // watch （一个响应式数据）
    // watch(name,(newVal,oldVal)=>{
    //   console.log('name变了',newVal,oldVal)
    // },{immediate: true,deep: true})
    // 多个
    watch([person],(newVal,oldVal)=>{
      // newVal 是数组，表示新的
      // oldVal 是叔祖，表示旧的
      console.log('name变了',newVal,oldVal)
    })
    // 如果是对象（reactive）监听，会有问题。
    // 如果是
    // 1. oldVal跟newVal是同样的值。
    // 2. 默认开启深度监听（deep: false 无效）

    // 以下deep:true生效，因为不是reactive
    watch(()=>person.result,(newVal,oldVal)=>{
      // newVal 是数组，表示新的
      // oldVal 是叔祖，表示旧的
      console.log('name变了',newVal,oldVal)
    },{deep:true})

    // 单个
    // watch(()=>person.firstName,(newVal,oldVal)=>{
    //   console.log('name变了',newVal,oldVal)
    // })
    // 多个
    // watch([()=>person.firstName,()=>person.lastName],(newVal,oldVal)=>{
    //   console.log('name变了',newVal,oldVal)
    // })
    //#endregion


    function add(){
      // 基础类型（RefImpl）对象，需要.value 修改值
      name.value =1;
      // 对象则不用
      obj.love = 'love +1'
    }
    function changeName(){
      person.firstName = '林'
    }

    // 01. 对象返回
    return {
      
      name,
      obj,
      add,
      person,
      changeName
    }
    // 02. 函数返回(渲染函数)
    // return ()=>{
    //   return h('h1','这是setup的渲染函数')
    // }
  }
}
</script>