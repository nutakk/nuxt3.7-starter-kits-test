export default defineNuxtPlugin((NuxtApp) => {
  NuxtApp.provide('testPlugin2', (txt: string) => {
    return '2.' + txt + '-' + new Date()
  })
})
