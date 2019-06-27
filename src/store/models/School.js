/* Ensure that names of
 actions, mutations and getters in one module (Model)
 don't conflict with name of any other if you don't want to deal with
 namesapcing every
 else all them are called at once when used
 */

export default {
  namespaced : true, // this ensures that we deal with naming conflicts
  modules  : {}, // nested modules
  state    : {
    info : {
      name  : 'Prima Academy',
      motto : 'Arise and Shine',
      yearEstablished : '',
      logo : ''
    },
    academicSections : [
      {
        name : 'Pre School',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        pic : ''
      },
      {
        name : 'Lower & Upper Primary',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        pic : ''
      },
      {
        name : 'Junior High',
        description : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
        pic : ''
      },
    ],
    awardsAndAchievements : [],
    teachers : [
      {
        pic : '',
        name : 'Mr Ahoma',
        subjects : ['Mathematics'],
        academicSection : 'Upper primary'
      },
      {
        pic : '',
        name : 'Mrs Quartey',
        subject : 'Ga',
        academicSection : 'Upper primary'
      }
    ],
    management : [
      {
        pic : '',
        name : 'Mr Ahoma',
        role : 'Principal',
        email : 'ahoma@gmail.com',
        phone : '+233 260 721 1202',
        skype : '',
        bio : ''
      },
    ]
  },
  getters  : {
    info      : (state, getters) => {
      return state.info
    },
    academicSections      : (state, getters) => {
      return state.academicSections
    },
    awardsAndAchievements      : (state, getters) => {
      return state.awardsAndAchievements
    },
    teachers      : (state, getters) => {
      return state.teachers
    },
    management      : (state, getters) => {
      return state.management
    }
  },
  // Use to alter state not for fetching data or complex computations
  mutations: {
    alterExample: (state, payload) => {
      // state.example = payload
    }
  },
  // Do not use for direct update. Call the coresponding mutation
  actions  : {
    alterExample: ({ commit, getters, state }, payload) => {
      // the first arg is context[commit, state]
      // here we're only getting the commit and state props
      // commit('alterExample', payload)
    }
  },
}
