<template>
  <div class="video-list">
    list
    <div class="test">list</div>
    <van-button color="#7232dd">单色按钮</van-button>
  </div>
</template>
<script>
import "./video-list.scss";
import { Button } from "vant";
import { Toast } from 'vant';
export default {
  components: {
     [Button.name]: Button,
  },
  created() {
    Toast({
        type: 'fail',
        message: '222222222',
        duration: 300
      });    
  }
};
</script>