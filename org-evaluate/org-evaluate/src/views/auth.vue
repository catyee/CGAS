<template>
  <div></div>
</template>
<script>
export default {
  computed: {
    role () {
      const role = this.$store.getters.roles[0]
      if (role === 'common') {
        return '负责专员'
      }
      if (role === 'admin') {
        return '民政局'
      }
      if (role === 'pg') {
        return '基层用户'
      }
      return ''
    }
  }
}
</script>
