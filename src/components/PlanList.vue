<template>
    <h2>Plan List</h2>
    <table>
        <tr><td>key</td><td>value</td></tr>
        <tr v-for="item in list" v-bind:key="item.id"><td>{{item.id}}</td><td>{{item.title}}</td></tr>
    </table>
</template>

<script>
import axios from 'axios'
export default {
    name: "PlanList",
    setup() {
        
    },
    data(){
        return {list:undefined}
    },
    async mounted() {
    // GET request using axios with async/await
    await axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
        this.list = res.data
        console.warn(res)
    })
    }
}
</script>
