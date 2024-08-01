<script setup lang="ts">

import { Location, HomeFilled, Star, QuestionFilled, User, Menu } from '@element-plus/icons-vue'
</script>

<template>
  <el-affix :offset="0">
    <div class="main-nav">
      <div class="text-tabs">
        <el-tooltip effect="dark" content="Главная страница" placement="bottom-start">
          <el-button
            type="text"
            plain
            :icon="HomeFilled"
          />
        </el-tooltip>
        <el-text>|</el-text>
        <el-button type="text">Сообщества</el-button>
        <el-text>|</el-text>
        <el-button type="text">Проекты</el-button>
        <el-text>|</el-text>
        <el-button type="text">Запросы</el-button>
        <el-text>|</el-text>
        <el-button type="text">Предложения</el-button>
        <el-text>|</el-text>
        <el-button type="text"><el-icon><Location /></el-icon>Карта</el-button>
      </div>
      <div class="icon-tabs">
        <el-row justify="end">
          <el-tooltip effect="dark" content="Избранное" placement="bottom-start">
            <el-button
              circle
              :icon="Star"
            />
          </el-tooltip>

          <el-tooltip effect="dark" content="Помощь" placement="bottom-start">
            <el-button
              circle
              :icon="QuestionFilled"
            />
          </el-tooltip>

          <el-tooltip effect="dark" content="Аккаунт" placement="bottom-start">
            <el-button
              circle
              :icon="User"
            />
          </el-tooltip>

          <el-tooltip effect="dark" content="Меню" placement="bottom-start">
            <el-button
              circle
              :icon="Menu"
            />
          </el-tooltip>
        </el-row>
      </div>
    </div>
    <el-divider style="margin: 8px 0" />
  </el-affix>

</template>

<style scoped lang="stylus">
.main-nav
  display flex
  justify-content space-between
  align-items end
  width 100%
  height 56px

  .text-tabs,
  .icon-tabs
    display flex

  .text-tabs
    justify-content center
    gap 8px

    .el-button
      color black
</style>