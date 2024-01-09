export default defineNuxtPlugin((NuxtApp)  => {
  const testPlugin2 = (txt: string) => {
    return '2.' + txt + '-' + new Date()
  }
  return {
    provide : {
      testPlugin2
    }
  }
  // return NuxtApp.provide('testPlugin2', (txt: string) => {
  //   return '2.' + txt + '-' + new Date()
  // })
})
