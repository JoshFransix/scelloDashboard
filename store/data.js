// holds your root state
export const state = () => ({
  users: ""
})


// contains your actions
export const actions = {
  async getUsers({ commit }) {
    let usersList = []
    await this.$axios.$get('/users/1oPxK5uZzl2VS36').then((response) => {
      response.data.forEach(el => {
        usersList.push(el)
      })
    }).catch(err => { console.log(err) })
    commit('updateUserData', usersList)
  },
}

// // contains your mutations
export const mutations = {
  updateUserData(state, users) {
    state.users = [...users]
  }

}
