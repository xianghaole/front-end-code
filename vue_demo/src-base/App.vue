<template>
    <div>
      <img class="content" src="./assets/logo.png" alt="">
      <!--3.使用标签-->
      <HelloWorld/>
    </div>
</template>

<script>
  //1.引入组件
  import HelloWorld from './component/HelloWorld';
    export default {
        //2.映射成标签
      components:{
          HelloWorld
      }
    }

</script>

<style>
.content{
  width:30px;
  height:30px;
}
</style>
