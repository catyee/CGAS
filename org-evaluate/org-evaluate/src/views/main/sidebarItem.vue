<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children, item)&&(!onlyOneChild.children||onlyOneChild.noShowingChildren)">
      <el-menu-item :index="resolvePath(onlyOneChild.path)">
        <i class="iconfont" :class="onlyOneChild.meta.icon"></i>
        <span slot="title">{{ onlyOneChild.meta.title }}</span>
      </el-menu-item>
    </template>
    <el-submenu v-else :index="resolvePath(item.path)">
      <template slot="title" >
        <i class="iconfont" :class="item.meta.icon"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <el-menu-item-group>
        <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :item="child"
          :base-path="resolvePath(child.path)"
        />
      </el-menu-item-group>
    </el-submenu>
  </div>
</template>
<script>
import path from 'path'
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      onlyOneChild: null
    }
  },
  methods: {
    hasOneShowingChild (children = [], parent) {
      if (!children) {
        children = []
      }
      // 筛选出有几个可用的children
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false
        } else {
          // Temp set(will be used if only has one showing child)
          this.onlyOneChild = item
          return true
        }
      })

      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        return true
      }

      return false
    },
    resolvePath (routePath) {
      let newPath = path.resolve(this.basePath, routePath)
      // 如果路由需要传id将id去掉 因为menu组件中不需要 否则会报错
      newPath = newPath.replace(/:id/, '')
      return newPath
    }
  }
}
</script>
<style lang="scss" scoped>
.iconfont {
  font-size: 16px;
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
  font-size: 16px;
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
