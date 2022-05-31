<script>
import BasicView from './BasicView.vue';
export default {
    data() {
        return {
            message: "Hello World!"
        };
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split("").reverse().join("");
        },
        handleAppend() {
            this.message = this.message + "!";
        },
        notify() {
            alert("Hello little friend!!");
        }
    },
    components: { BasicView }
}
</script>

<template>
    <BasicView />
    <h1>{{ message }}</h1>

    <button @click="reverseMessage">Reverse Message</button>

    <!-- Can also be an inline expression statement -->
    <button @click="handleAppend">Append "!"</button>

    <!--
    Vue also provides modifiers for common tasks
    such as e.preventDefault() and e.stopPropagation()
  -->
    <a href="https://vuejs.org" @click.prevent="notify">
        A link with e.preventDefault()
    </a>
</template>
