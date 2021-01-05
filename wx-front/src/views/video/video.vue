<template>
    <div class="video">
        <div class="video-title f20">
            如何预防老人感冒？
        </div>
        <div class="video-tag">
            <div class="tag pr-16">养老照料</div>
            <div class="time">今天</div>
        </div>
        <div class="video-content"></div>
        <div class="video-desc">
                    随着年龄的增长，人身体的各项生理机能都会发生退化，抵抗力变弱，因此，老年人很容易被一些疾病困扰，且不易恢复，例如感冒。感冒对于普通人群来说可能是小病，但对于老年人(特别是高龄老人)则属大病，因为感冒的并发症和继发感染严重者可危及老人生命。
        </div>
        <div class="video-tip">
            <div>阅读10万+</div>
        </div>
    </div>
</template>

<script>
import "./video.scss";
import { Button } from "vant";

export default {
  components: {
    [Button.name]: Button,
  },
  data() {
    return {
      searchKey: "", // 搜索关键字
      list: [],
      loading: false,
      finished: false,
    };
  },
  created() {
    // Toast({
    //   type: "fail",
    //   message: "222222222",
    //   duration: 300,
    // });
  },
  methods: {
  }
};
</script>