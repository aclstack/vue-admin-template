const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  filterList: state => {
    return state.list.filter(item => item <= 10)
  }
}
export default getters
