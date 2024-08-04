<script setup lang="ts">
import { DocumentAdd, Location } from '@element-plus/icons-vue'
import { useModalsStore } from '@/store/modals'
</script>

<template>
  <el-drawer v-model="useModalsStore().showPublicList" title="Меню">

    <el-menu
      class="el-menu-vertical-demo"
      :router="true"
    >
      <el-menu-item index="/projects-editor">
        <el-button type="text" :icon="DocumentAdd" style="color: black">Новый проект</el-button>
      </el-menu-item>

      <el-menu-item-group>
        <template #title>
          <el-icon><Location /></el-icon>
          <span>Выбрать проект для редактирования:</span>
        </template>
        <el-menu-item>Проект 0</el-menu-item>
        <el-menu-item>Проект 1</el-menu-item>
        <el-menu-item>Проект 2</el-menu-item>
      </el-menu-item-group>

      <el-menu-item-group>
        <template #title>
          <el-icon><Location /></el-icon>
          <span>Мои команды</span>
        </template>
        <el-menu-item>Команда 0</el-menu-item>
        <el-menu-item>Команда 1</el-menu-item>
      </el-menu-item-group>

      <el-menu-item-group>
        <template #title>
          <el-icon><Location /></el-icon>
          <span>Мои группы</span>
        </template>
        <el-menu-item>Группа 0</el-menu-item>
        <el-menu-item>Группа 1</el-menu-item>
        <el-menu-item>Группа 2</el-menu-item>
        <el-menu-item>Группа 3</el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </el-drawer>
</template>

<style scoped lang="stylus">

</style>