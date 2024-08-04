<script setup lang="ts">
import MainNav from '@/components/MainNav.vue'

const url_logo = '/urbanset_logo.png'
</script>

<template>
  <el-row justify="start">
    <el-image :src="url_logo" :fit="'fill'" />
    <h2>ПЛАТФОРМА РАЗВИТИЯ ГОРОДОВ</h2>
  </el-row>
  <MainNav />
</template>

<style scoped>

</style>