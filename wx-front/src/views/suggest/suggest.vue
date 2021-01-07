<template>
  <div class="suggest">
    <div class="title pb-16">感谢您关注我们！请告诉我们您的意见和建议，我们会参考您的反馈不断优化我们的产品和服务。</div>
    <div class="pb-22">
      <van-field
        v-model="message"
        class="textarea"
        type="textarea"
        placeholder="请输入您的意见"
      />
    </div>
    <van-form @submit="onSubmit">
      <van-field
        class="form-item"
        label-class="label"
        v-model="lxr"
        label-align="right"
        name="联系人"
        label="联系人"
        :center="true"
        :colon="true"
        placeholder="请输入您的姓名"
        :rules="[{ required: true, message: '请输入您的姓名' }]"
      />
      <van-field
        label-class="label"
        class="form-item"
        v-model="phone"
        label-align="right"
        name="手机号"
        label="手机号"
        :colon="true"
        :center="true"
        placeholder="请输入您的手机号"
        :rules="[{ required: true, message: '请输入您的手机号' }]"
      />
      <van-field
        label-class="label"
        class="form-item"
        v-model="email"
        label-align="right"
        :center="true"
        name="邮箱"
        label="邮箱"
        :colon="true"
        placeholder="请输入您的邮箱"
      />
      <div class="pt-32">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
import "./suggest.scss";
import { Field } from "vant";
import { Form } from "vant";
import { Button } from "vant";
export default {
  components: {
    [Field.name]: Field,
    [Form.name]: Form,
    [Button.name]: Button,
    // [GridItem.name]: GridItem,
    // [Grid.name]: Grid,
    // [VanImage.name]: VanImage,
    // videoPlayer,
  },
  data() {
    return {
      message: "",
      department: "",
      lxr: "",
      phone: "",
      email: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>