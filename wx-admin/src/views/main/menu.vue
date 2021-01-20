<template>
  <div class="menu-container">
    <el-menu :default-active="element.active" :router="true" class="menu-list" :unique-opened="true">
      <el-menu-item index="/main/index">
        <i class="iconindex-normal iconfont"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="/main/video-list">
        <template slot="title">
          <i class="iconvideo-normal iconfont"></i>
          <span>视频管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/main/video-list">视频列表</el-menu-item>
          <el-menu-item index="/main/add-video">上传视频</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/main/tag-list">
        <template slot="title">
          <i class="iconrelation-normal iconfont"></i>
          <span>关系管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/main/tag-list">标签管理</el-menu-item>
          <el-menu-item index="/main/relation-list">新建关系</el-menu-item>
          <el-menu-item index="/main/relation-list">管理关系</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/main/cooperation">
        <template slot="title">
          <i class="iconmessage-normal iconfont"></i>
          <span>信息管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/main/cooperation">合作洽谈</el-menu-item>
          <el-menu-item index="/main/suggest">意见反馈</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/main/administrator">
        <template slot="title">
          <i class="iconuser-normal iconfont"></i>
          <span>管理员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/main/reset-pwd">修改密码</el-menu-item>
          <el-menu-item index="/main/administrator">管理员列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      element: {
        router: true, // 是否使用vue-router的模式 启用该模式会在激活导航时以index作为path进行路由跳转
        // 当前激活菜单的index
        active: ''
      }
    }
  },
  mounted () {
    this.element.active = this.$route.path
  }
}
</script>
<style lang="scss" scoped>
.iconfont{
 font-size: 16px;
  padding-right: 20px;
  color: #B7C2CF;
}
.menu-container {
  width: $menu-width;
  min-height: 100%;
  background-color: #fff;
}

.menu-item {
  background-color: yellow;
}
.menu-container /deep/ .el-submenu__title,
.menu-container /deep/ .el-menu-item {
  height: 64px;
  line-height: 64px;
  font-size: 16px;
  color: #111;
  &:hover {
    background: $body-deep-color;
    color: $system-color;
    .iconfont {
      color: $system-color;
    }
  }
  &.is-active {
    background-color: $body-deep-color;
    color: $system-color;
    .iconfont {
      color: $system-color;
    }

  }
   &:focus {
    background-color: $body-deep-color;
    color: $system-color;
    .iconfont {
      color: $system-color;
    }
  }
}
.menu-list /deep/ .el-menu-item-group .el-menu-item {
  padding-left: 59px !important;
}
/deep/ .el-menu-item-group__title {
  padding: 0;
}
/deep/ .is-active .el-submenu__title {
  color: $system-color;
  .iconfont {
    color: $system-color;
  }
  i {
    color: $system-color;
  }
}
</style>
