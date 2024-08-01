<script setup lang="ts">
import { QuestionFilled } from '@element-plus/icons-vue'
</script>

<template>
  <el-tooltip class="box-item" effect="dark" :content="props.navText" placement="bottom-start">
    <el-button
      circle
      :icon="QuestionFilled"
    />
  </el-tooltip>
</template>

<style scoped lang="stylus">

</style>