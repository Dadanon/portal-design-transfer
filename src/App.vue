<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'
</script>

<template>
  <el-container class="main-container">
    <el-header class="main-header">
      <MainHeader />
    </el-header>
    <el-container class="main-view">
      <RouterView />
    </el-container>
    <el-footer class="main-footer">
      <MainFooter />
    </el-footer>
  </el-container>
</template>

<style lang="stylus" scoped>
.main-container
  display flex
  flex-direction column
  min-height 100vh
  padding 0 8px

.main-header, .main-footer
  width 100%
  height 300px

.main-header
  padding 0

.main-footer
  background-color #aaa
  margin-bottom 8px

.main-view
  display flex
  flex-direction column
  width 100%

</style>


