import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMyMainStore = defineStore({
  id: 'useMyMainStore',
  state: () => ({
    dptList : [],
   }),
  actions: {}
})
