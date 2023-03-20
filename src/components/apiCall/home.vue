<template>
<div>
  <h1>Home</h1>
    <p v-for="item in list" :key="item">{{item.id}}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      list: [],
    };
  },
  async mounted() {
    let res = await axios.get("https://reqres.in/api/users?page=1");
    console.warn(res.data.data);
    this.list=res.data.data
  },
};
</script>