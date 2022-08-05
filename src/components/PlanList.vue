<template>
    <h2>Activites for overcoming {{msgdis}}</h2>
                                        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Recommended Activities</th>
    </tr>
  </thead>
  <tbody>
        <tr v-for="item in list" v-bind:key="item.id"><td>{{item.id}}</td><td>{{item.title}}</td></tr>
  </tbody>
</table>
</template>

<script>
import axios from 'axios'
export default {
    name: "PlanList",
    props:{
        msgdis: String,
    },
    setup() {
        
    },
    data(){
        return {list:undefined}
    },
    async mounted() {
    // GET request using axios with async/await
    await axios.get("https://adb-2166169465802843.3.azuredatabricks.net/?o=2166169465802843#mlflow/models/disease_management_recomm/serving",{
        headers:{
            Authorization: 'Bearer dapi6e073c785d1c6a2e4d0c1a7c40db1928-2'
        }
    })
    .then((res) => {
        this.list = res.data
        console.warn(res)
    })
    }
}
</script>
