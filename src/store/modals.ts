import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalsStore = defineStore('modals', () => {
  const showPublicList = ref<boolean>(false)
  return {
    showPublicList
  }
})
