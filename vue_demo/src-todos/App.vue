<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addI="addI"/>
      <TodoList :todos="todos" :deleteI="deleteI"/>
      <TodoFooter :todos="todos" :deleteCompleteTodos="deleteCompleteTodos" :selectAll="selectAll"/>
    </div>
  </div>
</template>

<script>
    import TodoHeader from './components/TodoHeader.vue'
    import TodoList from './components/TodoList.vue'
    import TodoFooter from './components/TodoFooter.vue'
    export default {
        data(){
            return{
              todos: JSON.parse(window.localStorage.getItem('todo_key') || '[]')
// [
//                  {
//                      title:'吃饭',
//                      complete:false
//                  },
//                  {
//                    title:'睡觉',
//                    complete:true
//                  },
//                  {
//                    title:'coding',
//                    complete:false
//                  }
//                ]
            }
        },
        components:{
            TodoHeader,
            TodoList,
            TodoFooter
        },
        methods:{
            addI(todo){
                this.todos.unshift(todo);
            },
            deleteI(index){
                this.todos.splice(index,1);
            },
          //删除的方法
            deleteCompleteTodos(){
                this.todos = this.todos.filter(todo => !todo.complete );
            },
          //全选/全不选的方法
            selectAll(check){
                this.todos.forEach(todo=>todo.complete = check);
            }
        },
        watch:{
            todos:{
              deep:true, //深度监视
              handler:function(value){
                window.localStorage.setItem('todo_key',JSON.stringify(value))
              }
            }

        }
    }

</script>

<style>

</style>
