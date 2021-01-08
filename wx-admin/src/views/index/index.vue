<template>
  <div class="index pl-16">
    <div class="selector-group pt-36 pb-16">
      <el-radio-group v-model="labelPosition" size="small">
        <el-radio-button label="left">左对齐</el-radio-button>
        <el-radio-button label="right">右对齐</el-radio-button>
        <el-radio-button label="top">顶部对齐</el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>
<script>
import './index.scss'
export default {}
</script>
