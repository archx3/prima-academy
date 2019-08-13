/* Ensure that names of
 actions, mutations and getters in one module (Model)
 don't conflict with name of any other if you don't want to deal with
 namesapcing every
 else all them are called at once when used */
export default {
  namespaced: true, // this ensures that we deal with naming conflicts
  modules   : {}, // nested modules
  state     : [
    {
      startDate : "1st August 2019",
      endDate : "30th August 2019",
      title : "Ateneo de Davao University",
      label : "BS in Information Technology",
      description : "Ateneo de Davao University",
      location : "Roxas Ave, Poblacion District, Davao City"
    },
    {
      startDate : "1st August 2005",
      endDate : "15th August 2005",
      title : "Magna Cum Laude",
      label : "Tagum City",
      description : "Daang Maharlika Highway",
      location : "St. Mary's College"
    },
    {
      startDate : "1st August 1999",
      endDate : "15th August 2009",
      title : "Nina Mo",
      label : "Tagum City",
      description : "Magugpo Pilot Imelda Elementary School",
      location : "Sobrecary St"
    },
  ],
  getters   : {
    cal      : (state) => {
      return state;
    },
  },
  // Use to alter state not for fetching data or complex computations
  mutations : {
    alterExample: (state, payload) => {
      state.example = payload
    }
  },
  // Do not use for direct update. Call the coresponding mutation
  actions   : {
    alterExample: ({ commit, getters, state }, payload) => {
      // the first arg is context[commit, state]
      // here we're only getting the commit and state props
      commit('alterExample', payload)
    }
  },
}
