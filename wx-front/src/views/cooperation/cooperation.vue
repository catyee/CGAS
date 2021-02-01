<template>
  <div class="cooperation">
    <div class="title pb-16">请描述想要洽谈的项目简介/计划</div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="cooperate.cooperateContent"
        class="textarea"
        type="textarea"
        :rules="[{ required: true, message: '' }]"
        placeholder="请在此输入您的项目计划"
      />
      <div class="pb-22"></div>
      <van-field
        v-model="cooperate.contactOrganize"
        label-align="right"
        name="department"
        class="form-item"
        :center="true"
        label="联系单位"
        label-class="label"
        :colon="true"
        placeholder="请输入您单位的名称"
      />
      <van-field
        class="form-item"
        label-class="label"
        v-model="cooperate.contactName"
        label-align="right"
        name="联系人"
        label="联系人"
        :center="true"
        :colon="true"
        required
        placeholder="请输入您的姓名"
        :rules="[{ required: true, message: '' }]"
      />
      <van-field
        label-class="label"
        class="form-item"
        v-model="cooperate.phone"
        label-align="right"
        name="手机号"
        label="手机号"
        :colon="true"
        :center="true"
        required
        placeholder="请输入您的手机号"
        :rules="phoneRules"
      />
      <van-field
        label-class="label"
        class="form-item"
        v-model="cooperate.email"
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
import "./cooperation.scss";
import { Field } from "vant";
import { Form } from "vant";
import { Toast } from "vant";
import { Button } from "vant";
import { addCooperation } from "@/api/submit";
export default {
  components: {
    [Field.name]: Field,
    [Form.name]: Form,
    [Button.name]: Button,
    [Toast.name]: Toast,
  },
  data() {
    return {
      cooperate: {
        // 意见内容
        cooperateContent: "",
        contactOrganize: "",
        // 联系人姓名
        contactName: "",
        // 手机号
        phone: "",
        // 邮箱
        email: "",
      },
      // 手机号校验规则
      phoneRules: [
        { required: true, message: "" },
        // 验证是否为手机号
        {
          validator: this.util.isPhone,
          message: "手机号格式不正确",
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    onSubmit() {
      addCooperation(this.cooperate).then((res) => {
        if (res.code === 200) {
          Toast.success("提交成功");
          this.cooperate = {
            // 意见内容
            cooperateContent: "",
            contactOrganize: "",
            // 联系人姓名
            contactName: "",
            // 手机号
            phone: "",
            // 邮箱
            email: "",
          };
        } else {
          Toast.fail("提交失败");
        }
      });
    },
  },
};
</script>