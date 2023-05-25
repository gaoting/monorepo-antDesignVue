<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      v-for="(item, i) in formArr"
      :key="i"
      label="item.label"
      name="item.name"
      :rules="[
        {
          required:  item.rulesOpen || false,
          message: item.rulesOpen ? item.validateMsg || rulesMsg(item.type) : "",
        },
      ]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { FormState, FormArrayType } from "./props";

const formState = reactive<FormState>({
  username: "",
  password: "",
  remember: true,
});

const rulesMsg = (type) => {
  let str = ''
  switch (type) {
    case 'input':
    str ='请输入'
      break;

    case 'select':
    str = '请选择'
      break;
  
    default:
    str = ''
      break;
  }
  return str
}

const formArr = reactive<FormArrayType[]>([])

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<style lang="scss" scoped></style>
