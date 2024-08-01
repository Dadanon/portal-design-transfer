<script setup lang="ts">
import { Message } from '@element-plus/icons-vue'
</script>

<template>
  <div class="main-footer-mail">
    <el-icon><Message /></el-icon>
    <span>info@urbanset.ru</span>
  </div>

  <el-row class="u_footer_row2">
    <el-col :span="8"
    ><div class="grid-content">
        <span class="txt_gray"
        >Ссылки на презентации всех проектов в html и выпадающем спмске(?)</span
        >
    </div></el-col
    >
    <el-col :span="8"
    ><div class="grid-content">
        <span class="txt_gray"
        >Ссылки на презентации всех запросов в html и выпадающем спмске(?)</span
        >
    </div></el-col
    >
    <el-col :span="8"
    ><div class="grid-content">
        <span class="txt_gray"
        >Ссылки на презентации всех предложений в html и выпадающем спмске(?)</span
        >
    </div></el-col
    >
  </el-row>
</template>

<style lang="stylus" scoped>
.main-footer-mail
  display flex
  justify-content start
  align-items center
  gap 10px
</style>