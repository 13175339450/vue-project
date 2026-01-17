<script setup lang="ts">

</script>

<template>
  <div>
    登录页
    <div class="scss-test">
      测试var.scss自动导入
    </div>
  </div>
</template>

<!-- 需要明确指定 lang="scss" 才能使用 scss 语法 -->
<style scoped lang="scss">
  .scss-test {
    width: 100px;
    height: 100px;
    background-color: $priceColor;
  }
</style>
