<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from '@/components/MainHeader.vue'
</script>

<template>
  <el-header>
    <MainHeader />
  </el-header>
  <el-container>
    <RouterView />
  </el-container>
  <el-footer>
    hhh
  </el-footer>
</template>


