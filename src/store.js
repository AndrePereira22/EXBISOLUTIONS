// src/store.js
import { legacy_createStore as createStore } from 'redux'

const savedUser = localStorage.getItem('user')
const savedEmpresa = localStorage.getItem('empresa')

const initialState = {
  sidebarShow: true,
  theme: 'light',
  user: savedUser ? JSON.parse(savedUser) : null,
  empresa: savedEmpresa ? JSON.parse(savedEmpresa) : null,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    case 'logout':
      localStorage.removeItem('user')
      localStorage.removeItem('empresa')
      return { ...state, user: null, empresa: null }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
