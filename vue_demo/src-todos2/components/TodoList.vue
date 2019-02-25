<template>
  <div>
    <ul class="todo-main">
      <TodoItem v-for="(todo,index) in todos" :key="index" :todo="todo" :index="index" />
    </ul>
    <h3 style="color: red" v-show="todos.length===0">没有内容，赶快添加吧</h3>
  </div>

</template>

<script>
    import  TodoItem from './TodoItem.vue'
    export default {

        props:{
            todos:Array

        },
        components:{
            TodoItem
        }
    }

</script>

<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }

</style>
