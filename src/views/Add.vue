<template>
  <div>
    <p>
      标题
    </p>
    <input type="text" v-model="title">
    <p>内容</p>
    <input type="text" v-model="content">
    <br>
    <button class="btn" @click="add()" >添加</button>
  </div>
</template>

<script>
  import store from '@/store'
    export default {
        name: "Add",
      store,
      data(){
          return{
            title:'',
            content:'',
          }

      },
      methods:{
          add(){
              if(this.title ==='' || this.content ===''){
                alert("请输入的内容或者标题");
              }else {
                store.commit('addItem', {
                  title: this.title,
                  content: this.content,
                })
                //先提交，提交完之后在清空
                this.title = ''
                this.content = ''
                this.$router.push('/home/list')
              }
          }
      }
    }
</script>

<style scoped>
 div{
  line-height: 20px;
 }
  div button{
    margin-top: 20px;
  }
</style>
