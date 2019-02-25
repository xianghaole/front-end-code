<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
        <Add :addComments="addComments"/>
        <Comments :comments="comments" :deleteComments="deleteComments"/>

    </div>
  </div>
</template>

<script>
  import Add from './components/Add.vue'
  import Comments from './components/Comments.vue'
    export default {
      data(){
          return {
              comments:[
                {
                    name:'ZS',
                    content:'Vue So Easy'
                },
                {
                  name:'LS',
                  content:'Vue 还可以'
                },
                {
                  name:'WW',
                  content:'Vue 真难'
                }
              ]
          }
      }
      ,
      components:{
          Add,
          Comments
      },
      methods:{
          addComments(comment){
              this.comments.unshift(comment);
          },
          deleteComments(index){
              this.comments.splice(index,1);
          }
      }
    }

</script>

<style>

</style>
