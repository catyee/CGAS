<template>
  <div class="container">
    <Header />

    <div class="content">
      <Menu />
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Header from './header.vue'
import Menu from './menu.vue'
export default {
  components: {
    Header,
    Menu
  }
}
</script>
<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 60px;
}
.content {
  display: flex;
  height: 100%;
  box-sizing: border-box;
  // padding-top: 60px;
}
.main-content {
  flex: 1;
  height: 100%;
  background-color: $body-deep-color;
}
</style>
