<template>

<div>
  <h2 v-show="searchInfo">请输入用户名进行搜索</h2>
  <img :src="searchImg" alt="">
  <h2 v-show="errorMsg">{{errorMsg}}</h2>
  <div class="row">

    <div class="card" v-for="(user,index) in users" :key="index">
      <a :href="user.url" target="_blank">
        <img :src="user.imgUrl" style='width: 100px'/>
      </a>
      <p class="card-text">{{user.name}}</p>
    </div>
  </div>
</div>
</template>

<script>
    import img from '../assert/searching.gif'
    import PubSub from 'pubsub-js'
    import axios from 'axios'
    export default {
        data(){
            return {
                searchInfo:true,
                searchImg:'',
                users:[],
                errorMsg:''
            }

          }
      ,
      //订阅消息
      mounted(){
            PubSub.subscribe('searchCome',(msg,searchName)=>{
                const url =  `https://api.github.com/search/users?q=${searchName}`;
              //更新状态
              this.searchInfo = false;
              this.searchImg = img;
              this.users = [];
              this.errorMsg = '';
              //发送请求
                axios.get(url).then(
                    response =>{
                      const result = response.data;
                      const users = result.items.map(item =>({
                          url:item.html_url,
                          imgUrl:item.avatar_url,
                          name:item.login
                      }));
                      this.searchInfo = false;
                      this.searchImg = '';
                      this.users = users;
                    }
                ).catch(error=>{
                  this.searchInfo = false;
                  this.errorMsg = '请求失败';
                })
            })
        }
    }

</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
