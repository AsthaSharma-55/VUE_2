<script>

export default{
  name:'App'
}
</script>

<template>

 <router-link to='/'> </router-link> <br/>
 <!-- <router-link to='/login'> login</router-link> <br/>
 <router-link to='/profile'> profile</router-link> <br/>
 <router-link to='/profile/peter'> profile</router-link> <br/> -->

 <router-view></router-view>

  <!-- <main>
    
  </main> -->
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
