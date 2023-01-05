<template>
    <AddTask v-show="showAddTask"></AddTask>
    <Tasks :tasks="tasks"></Tasks>
</template>

<script>
import Tasks from '../components/Tasks'
import AddTask from '../components/AddTask'
import { mapGetters } from 'vuex'

export default{
    name: 'Home', 
    props:{
        showAddTask: Boolean
    },
    components:{
        Tasks,
        AddTask
    },
    computed: {
        ...mapGetters({
            tasks: 'toDos'
        })
    },
    created() {
        this.$store.commit("loadData")
    }
}
</script>