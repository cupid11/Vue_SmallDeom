<template>
  <div>
    <ul>
      <li v-for="(item,index) in Name">
        用户：{{ item.Name }}
      </li>
    </ul>
    <p @click="add()">添加</p>
  </div>
</template>

<script>
  import store from '@/store'
    export default {
        name: "User",
      store,
      data(){
          return{

          }
      },
      computed:{
        Name(){
          return store.state.Name
        }
      },
      methods:{
          add(){
            this.$router.push('/add')
          }
      }
    }
</script>

<style scoped>

</style>
