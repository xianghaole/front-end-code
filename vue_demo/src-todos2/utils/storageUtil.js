/**
 * Created by 蘑菇太狂 on 2019/2/22.
 */
const TODO_KEY = 'todo_key';
export default {
  saveTodos(todos){
    window.localStorage.setItem(TODO_KEY,JSON.stringify(todos))
  },
  readTodos(){
    return JSON.parse(window.localStorage.getItem(TODO_KEY) || '[]')
  }
}
