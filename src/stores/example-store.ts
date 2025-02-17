import { defineStore } from 'pinia'

export const naviStore = defineStore('naviStore', {
  state: (): {
    cbdc_article_selected_section: string
  } => ({
    cbdc_article_selected_section: 'front-page',
  }),

  getters: {},

  actions: {},
})
