<template>
  <div class="suggest">
    <div class="title pb-16">
     感谢您关注我们。我们希望倾听您的意见和建议。
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="suggest.suggestContent"
        class="textarea pb-16"
        type="textarea"
        placeholder="请输入您的意见"
        :rules="[{ required: true, message: '' }]"
      />
      <div class="pb-22"></div>
      <van-field
        class="form-item"
        label-class="label"
        v-model="suggest.contactName"
        label-align="right"
        name="联系人"
        label="联系人"
        :center="true"
        :colon="true"
        placeholder="请输入您的姓名"
        required
        :rules="[{ required: true, message: '' }]"
      />
      <van-field
        label-class="label"
        class="form-item"
        v-model="suggest.phone"
        label-align="right"
        name="手机号"
        label="手机号"
        type="tel"
        :colon="true"
        :center="true"
        placeholder="手机号"
        required
        :rules="phoneRules"
      />
      <van-field
        label-class="label"
        class="form-item"
        v-model="suggest.email"
        label-align="right"
        :center="true"
        name="邮箱"
        label="邮箱"
        :colon="true"
        placeholder="邮箱"
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
import { Toast } from "vant";
import { addSuggest } from "@/api/submit";
export default {
  components: {
    [Field.name]: Field,
    [Form.name]: Form,
    [Button.name]: Button,
    [Toast.name]: Toast,
  },
  data() {
    return {
      suggest: {
        // 意见内容
        suggestContent: "",
        department: "",
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
    // 提交建议
    onSubmit() {
      addSuggest(this.suggest).then((res) => {
        if (res.code === 200) {
          Toast.success("提交成功");
          this.suggest = {
            // 意见内容
            suggestContent: "",
            department: "",
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