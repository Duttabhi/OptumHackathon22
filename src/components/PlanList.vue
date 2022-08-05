<template>
    <h2>Activites for overcoming {{msgdis}}</h2>
                                        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Recommended Activities</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr><td>1</td><td>Choose a place to walk that is safe, such as your local mall.</td></tr>
        <tr><td>2</td><td>Jogging in the Morning</td></tr>
        <tr><td>3</td><td>Brisk Stretching</td></tr>
        
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
    const body = { "member_age": 59,"member_zipcode": "329090000","test_result": 9.6 };
    await axios.post("https://adb-2166169465802843.3.azuredatabricks.net/model/disease_management_recomm/4/invocations", 
        body,
        {
            headers: {
                'Authorization': 'Bearer dapi6e073c785d1c6a2e4d0c1a7c40db1928-2',
                'Content-Type':"application/json",
            }
        }
    )
    .then((res) => {
        this.list = res.data
        console.warn(res)
    })
    }
}
</script>
