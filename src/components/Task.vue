<template>
    <div @dblclick="this.$store.commit('updateTaskReminder', task)" :class="[task.reminder ? 'reminder' : '', 'task']">
        <h3>
            {{ task.text }}
            <i @click="deleteTask(task)" class="fas fa-times"></i>
        </h3>
        <p>{{ task.day }}</p>
    </div>
</template>

<script>

export default{
    name:"Task",
    props: {
        task: Object
    },
    methods: {
      deleteTask(task){
        if(confirm("Are you sure?")){
          this.$store.commit('deleteTask', task)
        }
      }
    }
}
</script>

<style scoped>
.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>