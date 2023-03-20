<template>
<div>
    <h1>Dynamic Component</h1>
    <button @click="tab='Javascript'">Load javascript</button>
    <br/><br/>
    <button @click="tab='Node'">Load Node</button>
     <br/><br/>
    <button @click="tab='React'">Load React</button>
     <br/><br/>
    <!-- <Javascript/>
    <Node/>
    <React/> -->
    <component :is="tab" />
</div>
</template>

<script>
import Javascript from './javascript.vue'
import Node from './Node.vue'
import React from './React.vue'
export default {
   name:"Home",
   components:{
    Javascript,
    Node,
    React
   },
   data(){
    return{
        tab:"Javascript"
    }
   }
}
</script>
