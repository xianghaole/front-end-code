<template>
  <div>
    <mt-button type="primary" @click.native="test" style="width:100%;">primary</mt-button>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
 export default {
     methods:{
         test(){
           Toast({
             message: '操作成功',
             iconClass: 'icon icon-success'
           });
         }
     }
 }
</script>

<style>

</style>
