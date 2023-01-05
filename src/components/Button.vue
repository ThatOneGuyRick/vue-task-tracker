<template>
    <button @click="this.$emit('toggle-add-task');" :style="{background: color}" class="btn">{{ text }}</button>
</template>

<script>
    export default {
        name: "Button",
        props: {
            text: String,
            color: String
        },
    }
</script>