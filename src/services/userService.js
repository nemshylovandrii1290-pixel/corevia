import api from './api'

export const getUser = () => {
  return api.get('/user/me')
}

export const updateUser = (data) => {
  return api.put('/user/me', data)
}
