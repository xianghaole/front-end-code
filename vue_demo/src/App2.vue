<template>
  <div class="container">
    <Search/>
    <MainBody/>

  </div>
</template>

<script>
  import Search from './components/Search.vue'
  import MainBody from './components/MainBody.vue'
    export default {
      components:{
          Search,
          MainBody
      }
    }

</script>

<style>

</style>
