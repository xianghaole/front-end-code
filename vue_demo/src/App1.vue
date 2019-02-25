<template>
    <div>
        <div v-if="!repoUrl">loading</div>
        <div v-else>most star is <a :href="repoUrl">{{repoName}}</a></div>
    </div>
</template>

<script>
  import  axios from 'axios';
    export default {
        data(){
            return {
                repoUrl:'',
                repoName:''
            }
        },
        //生命周期的回调函数执行异步请求
        mounted(){
            const url = `https://api.github.com/search/repositories?q=v&sort=stars`;
//            this.$http.get(url).then(
//                response=>
//                {
//                    this.repoName = response.data.items[0].name;
//                    this.repoUrl = response.data.items[0].html_url;
//                },
//                response => alert('请求失败')
//            )
          axios.get(url).then(
              response =>{
                  const result = response.data;
                  this.repoName = result.items[0].name;
                  this.repoUrl = result.items[0].html_url;
              }
          ).catch(
              alert('获取失败')
          )
        }
    }

</script>

<style>

</style>
