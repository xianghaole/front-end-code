<template>
    <div>
        <h2>home</h2>
      <div>
        <ul class="nav nav-tabs">
          <li><router-link to="/home/news">News</router-link></li>
          <li><router-link to="/home/message">Message</router-link></li>
        </ul>
      </div>


        <router-view></router-view>

    </div>

</template>

<script>
    export default {}

</script>

<style>

</style>
