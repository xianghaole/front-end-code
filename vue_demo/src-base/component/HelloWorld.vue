<template>
    <div>
        <p class="box">{{msg}}</p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg:'Vue is very good'
          }
        }
    }

</script>

<style>
.box{
  color: red;
  font-size:30px;
}
</style>
