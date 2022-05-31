<script>
import BasicView from "./BasicView.vue"
export default {
    components: {
        BasicView
    },
    data() {
        return {
            message: "Hello World!",
            isRed: true,
            color: "green"
        }
    },
    methods: {
        toggleRed() {
            this.isRed = !this.isRed
        },
        toggleColor() {
            this.color == "green" ? this.color = "blue" : this.color = "green"
        }
    }
}
</script>

<template>
    <BasicView />
    <p>
        <span :title="message">
            Hover your mouse over me for a few seconds to see my dynamically bound title!
        </span>
    </p>

    <!--
  class bindings have special support for objects and arrays
  in addition to plain strings
  -->
    <p :class="{ red: isRed }" @click="toggleRed">
        This should be red... but click me to toggle it.
    </p>

    <!-- style bindings also support object and arrays -->
    <p :style="{ color }" @click="toggleColor">
        This should be green, and should toggle between green and blue on click.
    </p>
</template>

<style>
.red {
    color: red;
}
</style>