export const useAuth = () => {
  const user = useState('user', () => null)

  const register = (name, email, password) => {
    if (name && email && password) {
      user.value = { name, email }
      return true
    }
    return false
  }

  const login = (email, password) => {
    if (email && password) {
      user.value = {
        name: email.split('@')[0],
        email
      }
      return true
    }
    return false
  }

  const logout = () => {
    user.value = null
  }

  return { user, register, login, logout }
}
