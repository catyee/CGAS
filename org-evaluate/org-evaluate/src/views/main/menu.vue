<template>
  <div class="menu-container">
    <el-menu
      :default-active="element.active"
      :router="true"
      class="menu-list"
      :unique-opened="true"
    >
       <sidebar-item
                    v-for="(route, index) in sidebarRouters"
                    :key="route.path  + index"
                    :item="route"
                    :base-path="route.path"
                />
    </el-menu>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import SidebarItem from './sidebarItem'
export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters(['sidebarRouters'])
  },
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
.iconfont {
  font-size: 14PX;
  // padding-right: 20px;
  color: #b7c2cf;
}
.menu-container {
  width: $menu-width;
  min-height: 100%;
  box-sizing: border-box;
  background-color: #fff;
}

.menu-item {
  background-color: yellow;
}
.menu-container /deep/ .el-submenu__title,
.menu-container /deep/ .el-menu-item {
  height: 64px;
  line-height: 64px;
  font-size: 14PX;
  color: #111;
  text-align: left;
  span {
    padding-left: 10px;
  }
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
