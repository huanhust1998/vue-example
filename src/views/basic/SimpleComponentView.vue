<script>
import TodoItem from "../../components/SimpleComponent.vue"
import BasicView from "./BasicView.vue"
export default {
    components: {
        TodoItem,
        BasicView
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
    <BasicView />
    <TodoItem v-for="item in groceryList" :todo="item" :key="item.id">
    </TodoItem>
</template>