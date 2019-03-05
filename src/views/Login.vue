<template>
  <div class="login">
    <form  v-if="!isReg">
    用户名：<input type="text" v-model="name" placeholder="请输入用户名"><br>
   密&nbsp;&nbsp;&nbsp;&nbsp;码: <input type="password" v-model="password" placeholder="请输入密码"><br>
    <button type="button" @click="login()">登陆</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button type="button" @click="reg()">注册</button>
    </form>
    <form  v-else>
        用户名：
        <input type="text" v-model="name"><br>
        密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:
        <input type="password" v-model="password"><br>
        请确认密码:
        <input type="password" v-model="repeat"><br>
        <button type="button" @click="addUser()">确定</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" @click="cancel()">取消</button>
    </form>
  </div>
</template>

<script>
  import  store from '@/store'
    export default {
        name: "Login",
      store,
      data(){
      return{
        isReg:false,
        name:'',
        password:'',
        repeat:''
      }
      },
        methods:{
          login(){
            //因为没有后台，所以localStorage用这个暂时存储数据
            if (localStorage.getItem('name',this.name) === this.name && localStorage.getItem('password',this.password)=== this.password) {
              this.name=''
              this.password=''
              this.$router.push('/home/list')
            }else {
              alert('用户密码不正确')
            }


          },
          reg(){
            this.isReg = true
          },
          cancel(){
            this.isReg = false
          },
          addUser(){
            if (this.password === this.repeat) {
              localStorage.setItem("name",this.name)
              localStorage.setItem("password",this.password)
              this.name=''
              this.password=''
              this.isReg=false
            }else {
              alert("两次密码不一样")
            }

          }
      }
    }
</script>

<style scoped lang="scss">
   .login{
     line-height: 60px;
     font-size: 15px;
     width: 359px;
     height: 350px;
   text-align: center;
   }
</style>
