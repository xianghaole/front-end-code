<template>

    <ul>
      <li v-for="(message,index) in messages" :key="message.id">
        <a href="xxx">{{message.title}}</a>
      </li>


    </ul>
</template>

<script>
    export default {
        data(){
            return{
                messages:[]
            }
        },
      mounted(){
          setTimeout(()=>{
              const messages = [{
                  id:1,
                  title:'message01'
              },
                {
                  id:2,
                  title:'message02'
                },
                {
                  id:3,
                  title:'message03'
                }

              ];
              this.messages = messages
            }
          ,1000)
      }
    }

</script>

<style>

</style>
