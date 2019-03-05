<template>
  <div>
  <router-view />
    <ul class="footer">
      <!--router-link是添加路由链接-->
      <li class="icons"><router-link :to="{name:'list'}">新闻列表</router-link></li>
      <li class="icons"><router-link :to="{name:'user'}">个人中心</router-link></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped lang="scss">
  *{
    padding: 0;
    margin: 0;
  }
.footer{
  position: fixed;
  width: 100%;
  height: 50px;
  line-height: 60px;
  left: 0;
  bottom: 10px;
  display: flex;
  /*使用flex布局，让按钮看起来比较舒服*/
  flex-flow: row nowrap;
  justify-content: space-around;
  /*上面这个命令是  均匀的分布*/
}
  .icons{
    list-style: none;
    text-align: center;
    flex: 1;
    border: 1px solid #0a67fb ;
    font-size: 16px;
    a{
      color: #42b983;
      display: block;
      &.active{
        color: #fff;
        height: 49px;
        background: #42b983;
      }
    }
  }
</style>
