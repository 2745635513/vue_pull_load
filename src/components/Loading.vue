<template>
  <div class="loading-box">
    <slot></slot>
    <div v-show="loading" class="loading-content">
      <div class="el-loading-spinner">
        <i class="el-icon-loading"></i>
        <p class="el-loading-text">拼命加载中</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Loading",
  props: {
    loading: Boolean
  }
};
</script>
<style scoped>
.loading-box {
  position: relative;
}
.loading-content {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(255, 255, 255, 0.8);
}
</style>
