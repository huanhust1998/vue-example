<script>
import TodoItem from "../components/SimpleComponent.vue"
export default {
    components: {
        TodoItem
    },
    data() {
        return {
            groceryList: [
                { id: 0, text: 'Vegetables' },
                { id: 1, text: 'Cheese' },
                { id: 2, text: 'Whatever else humans are supposed to eat' }
            ]
        }
    }
}
</script>
<template>
    <TodoItem v-for="item in groceryList" :todo="item" :key="item.id">
    </TodoItem>
</template>