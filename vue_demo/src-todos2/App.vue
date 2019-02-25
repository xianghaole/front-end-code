<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader @addI="addI"/>
      <TodoList :todos="todos" />
      <TodoFooter>
        <input type="checkbox" v-model="isCheck" slot="checkAll"/>
        <span slot="count">已完成{{completeSize}}/ 全部{{todos.length}}</span>
        <button class="btn btn-danger" @click="deleteCompleteTodos" v-show="completeSize" slot="deleteItem">清除已完成任务</button>
      </TodoFooter>
    </div>
  </div>
</template>

<script>

    import PubSub from 'pubsub-js'
    import TodoHeader from './components/TodoHeader.vue'
    import TodoList from './components/TodoList.vue'
    import TodoFooter from './components/TodoFooter.vue'
    import storageUtil from './utils/storageUtil'
    export default {
        data(){
            return{
              todos: storageUtil.readTodos()
            }
        },
        computed:{
          completeSize(){
            return this.todos.reduce((preTotal,todo) =>preTotal+(todo.complete?1:0) ,0);
          },
          isCheck:{
            get(){
              return this.completeSize === this.todos.length && this.completeSize>0;
            },
            set(value){
              return this.selectAll(value);
            }
          }
        },
        components:{
            TodoHeader,
            TodoList,
            TodoFooter
        },
        mounted(){
          PubSub.subscribe('deleteI',(msg,index)=>this.deleteI(index))
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
//                window.localStorage.setItem('todo_key',JSON.stringify(value))
                storageUtil.saveTodos(value);
              }
            }

        }
    }

</script>

<style>

</style>
