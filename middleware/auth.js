export default defineNuxtRouteMiddleware((to, from) => {
  const role = localStorage.getItem("role")

  if (!role) {
    return navigateTo("/login")
  }
})
