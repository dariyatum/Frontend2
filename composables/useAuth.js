// composables/useAuth.js
import { ref } from 'vue'

export function useAuth() {
  const currentUser = ref(JSON.parse(localStorage.getItem('currentUser')) || null)

  const register = (name, email, password, userType = 'candidate') => {
    const user = { name, email, password, userType }

    // Save in localStorage
    localStorage.setItem('currentUser', JSON.stringify(user))
    currentUser.value = user

    return true
  }

  const logout = () => {
    localStorage.removeItem('currentUser')
    currentUser.value = null
  }

  return { currentUser, register, logout }
}