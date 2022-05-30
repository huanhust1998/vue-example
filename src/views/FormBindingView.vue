<script>
export default {
    data() {
        return {
            text: "Edit me",
            checked: true,
            checkedNameList: ["Jack"],
            picked: "One",
            selected: "A",
            multiSelectedList: ["A"]
        }
    }
}
</script>

<template>
    <h3>Text input</h3>
    <input v-model="text">{{ text }}

    <h2>Checkbox</h2>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">Checked:{{ checked }}</label>


    <h2>Multi Checkbox</h2>
    <input type="checkbox" id="Jack" value="Jack" v-model="checkedNameList">
    <label for="Jack">Jack</label>
    <input type="checkbox" id="John" value="John" v-model="checkedNameList">
    <label for="John">John</label>
    <input type="checkbox" id="Mike" value="Mike" v-model="checkedNameList">
    <label for="Mike">Mike</label>
    <p>Checked names:
    <pre>{{ checkedNameList }}</pre>
    </p>
</template>