<script>
import BasicView from './BasicView.vue'
export default {
    data() {
        return {
            message: "Hello World!"
        };
    },
    components: { BasicView }
}
</script>

<template>
<BasicView />
    <h1>{{ message }}</h1>
</template>