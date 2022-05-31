<script>
import BasicView from './BasicView.vue'
export default {
    data() {
        return {
            text: "Edit me",
            checked: true,
            checkedNameList: ["Jack"],
            picked: "One",
            selected: "A",
            multiSelectedList: ["A"]
        };
    },
    components: { BasicView }
}
</script>

<template>
    <BasicView />
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

    <h2>Radio</h2>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="One">One</label>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="Two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>

    <h2>Select</h2>
    <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
    </select>
    <span>Selected: {{ selected }}</span>

    <h2>Multi Select</h2>
    <select v-model="multiSelectedList" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
    </select>
    <span>SelectedList: {{ multiSelectedList }}</span>
</template>