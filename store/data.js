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


  // // Filter by Location
  // async filterLocation({ commit }, obj) {
  //   let organizersList = []
  //   await this.$axios.$get(`/user/filterOrganizerByLocation?location=${obj}`).then((response) => {
  //     response.response.forEach(el => {
  //       organizersList.push(el)
  //     })
  //   }).catch(err => { console.log(err) })
  //   commit('updateOrganizerData', organizersList)
  // },
  // // Filter by Date Created
  // async filterDateCreated({ commit }, obj) {
  //   let organizersList = []
  //   await this.$axios.$get(`/user/filterOrganizerByDateCreated?timeFrame=${obj}`).then((response) => {
  //     response.response.forEach(el => {
  //       organizersList.push(el)
  //     })
  //   }).catch(err => { console.log(err) })
  //   commit('updateOrganizerData', organizersList)
  // }
}

// export const getters = {
//   getUserId: (state) => (id) => {
//     return state.organizers.find(organizer => organizer._id == id)
//   }
// }
// // contains your mutations
export const mutations = {
  updateUserData(state, users) {
    // const usersList = users.sort((a, b) =>
    //   new Date(a.createdAt) <= new Date(b.createdAt) ? 1 : -1
    // );
    state.users = [...users]
  }

}
