<template>
    <h1>Profile page</h1>
    <!-- <button >click</button> -->
</template>

<script>
import {useRoute} from 'vue-router'
export default {
    name:"Profile",
    data(){
        return {
            profile:""

        }
    },
    mounted(){
        const route=useRoute()
        console.warn(route.params.name)
    }
}
</script>