import { createStore } from 'vuex'
import axios from 'axios'
import {Task} from "./task"

export interface State{
  todos: Task[]
}

export default createStore<State>({
    getters: {
        toDos(state) {
            return state;
        }
    },
    mutations: {
      async loadData(state){
        const data = await axios.get<Task[]>("http://localhost:5000/tasks")
        state.todos = data.data;
      },
      async deleteTask(state, task) {
        await axios.delete<Task>(`http://localhost:5000/tasks/${task.id}`)
          .then(() => {
            state.todos.splice(state.todos.indexOf(task), 1)
          })
      },
      async updateTaskReminder(state, task){
        task.reminder = !task.reminder
        await axios.put<Task>(`http://localhost:5000/tasks/${task.id}`, task)
          .then(() => {
            state.todos[state.todos.indexOf(task)].reminder = task.reminder
          })
      },
      async addTask(state, task){
        await axios.post<Task>(`http://localhost:5000/tasks`, task)
          .then((response) => {
            state.todos.push(response.data)
          })
      }
    }
})