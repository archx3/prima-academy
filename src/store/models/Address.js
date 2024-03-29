/* Ensure that names of
 actions, mutations and getters in one module (Model)
 don't conflict with name of any other if you don't want to deal with
 namespacing every method
 else all them are called at once when used
 */
export default {
  namespaced: true, // this ensures that we deal with naming conflicts
  modules   : {}, // nested modules
  state     : {
    location      : 'Nii Okaiman (Tabora), Accra, Gh',
    correspondence: 'P. O. Box KN 335, Kaneshie Accra',
    phones        : ['+233 550 462 623', '+233 243 505 957'],
    email : 'primaacademy@gmail.com',
    hours         : {
      'Nursery & Kg': '7:00am – 3:30pm',
      'Primary'     : '6:30am – 4:00pm',
      'JHS'         : '6:15am – 4:30pm'
    },
    socialMedia : {
      facebook : 'https://web.facebook.com/prima.aca',
      twitter : '',
      instagram : ''
    }
  },
  getters   : {
    all      : (state, getters) => {
      return state
    },
    correspondence      : (state, getters) => {
      return state.correspondence
    },
    email      : (state, getters) => {
      return state.email
    },
    phones      : (state, getters) => {
      return state.phones
    },
    hours      : (state, getters) => {
      return state.hours
    },
    location      : (state, getters) => {
      return state.location
    },
    socialMedia : (state, getters) => {
      return state.socialMedia
    },
  },
  // Use to alter state not for fetching data or complex computations
  mutations : {
    alterExample: (state, payload) => {
      // state.example = payload
    }
  },
  // Do not use for direct update. Call the coresponding mutation
  actions   : {
    alterExample: ({ commit, getters, state }, payload) => {
      // the first arg is context[commit, state]
      // here we're only getting the commit and state props
      // commit('alterExample', payload)
    }
  },
}
