<template>
  <div class="header height-60">
    <div class="header-title">
      <img src="@/assets/logo-header.svg" class="icon" />
      <div class="f16 pl-9">养老照料公众号后台管理</div>
    </div>
    <div class="header-right pr-16">

       <el-menu mode="horizontal">
        <el-submenu index="1">
          <template slot="title">{{userName}} <i class="iconfont iconyonghu icon-user"></i><span class=" username">用户名</span></template>
          <!-- <el-menu-item index="1-1" @click="updatePwd">修改密码</el-menu-item> -->
          <el-menu-item index="1-2" @click="logout">退出登录</el-menu-item>
          <!-- <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item> -->
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userName: ''
    }
  },
  methods: {
    // 退出登录
    logout () {
      this.$confirm('您确定要退出登录吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store
          .dispatch('LogOut')
          .then(res => {
            this.msgSuccess('退出成功')
            this.$router.push({ path: '/login' })
          })
        // eslint-disable-next-line handle-callback-err
          .catch(error => {
          })
      }).catch(() => {
      })
    }
  }
}
</script>
<style  lang="scss" scoped>
// /deep/.el-submenu__icon-arrow.el-icon-arrow-down{
//     display: none;
// }
/deep/.el-submenu__title{
 display: flex;
 align-items: center;
}
.header {
  display: flex;
  align-items: center;
}
.username{
  font-size: 20px;
  padding-left:10px ;
}
.icon-user {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border:1px  solid #595959;
  border-radius: 50%;;
  cursor: pointer;
  font-size: 20px;
}
.header-title {
  color: #fff;

  .icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: $menu-width;
  background: $system-color;
}
.header-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  height: 100%;
}
</style>
