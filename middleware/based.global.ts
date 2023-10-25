export default defineNuxtRouteMiddleware((to, from) => {
  console.log('middleware: from => ', from);
  console.log('middleware: to => ', to);
}) 