<template>
  <div>
    <p @click="quit()">退出</p>
    <br>
    <ul>
      <!--使用模板语法-->
      <li v-for="(item,index) in lists" :key="index" >

        <a>
         序号:{{ index + 1 }}</a>
       标题为：{{ item.title }}
        <br>
        内容为：{{ item.content }}
      </li>
    </ul>
  </div>
</template>

<script>
  import store from '@/store'
    export default {
        name: "List",
      store,
      //这样就引入store的数据了
      //因为是动态列表，所以我们要动态的去监听
      computed:{
         lists(){
           return store.state.list
         }
      },
      methods:{
        quit(){
          this.$router.push('/login')
        }
      },
    }
</script>

<style scoped>
  ul{
    line-height: 30px;
  }
  li{
    list-style: none;

  }
  li a{
    float: left;
  }
  div p{
    font-size: 12px;
    color: #1a801a;
    float: left;
  }
</style>
