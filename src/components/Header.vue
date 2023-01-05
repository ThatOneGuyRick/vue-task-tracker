<template>
    <header>
        <h1>{{ title }}</h1>
        <Button @toggle-add-task="this.$emit('toggle-add-task');" v-show="homepage" :color="showAddTask ? 'red': 'green'" :text="showAddTask ? 'Close': 'Add Task'"></Button>
    </header>
</template>

<script>
import Button from './Button.vue';

export default {
    name: 'Header',
    props: {
        title: String,
        showAddTask: Boolean
    },
    components:{
        Button
    },
    computed: {
        homepage() {
            if(this.$route.path == "/")
            {
                return true
            }
            return false
        }
    }
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>