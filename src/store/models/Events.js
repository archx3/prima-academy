/* Ensure that names of
 actions, mutations and getters in one module (Model)
 don't conflict with name of any other if you don't want to deal with
 namesapcing every
 else all them are called at once when used
 */
export default {
  namespaced: true, // this ensures that we deal with naming conflicts
  modules   : {}, // nested modules
  state     : {
    events: [
      {
        name     : 'Graduation',
        date     : { day : '21', month : 'September', year : '2019' },
        venue    : 'School Premises',
        theme    : '',
        startTime: '',
        endTime  : '',
        image : '',
        fee : '0.00',
        speakers : [
          { name : 'Mr Ahoma', position : 'Teacher' },
          { name : 'Mr Ahoma', position : 'Teacher' },
          { name : 'Mr Ahoma', position : 'Teacher' },
        ]
      },
      {
        name     : 'Trip to Boti',
        date     : { day : '01', month : 'December', year : '2019' },
        venue    : 'School Premises',
        theme    : '',
        startTime: '',
        endTime  : '',
        image : '',
        fee : '0.00',
        speakers : [
          { name : 'Mr Ahoma', position : 'Teacher' },
          { name : 'Mr Ahoma', position : 'Teacher' },
          { name : 'Mr Ahoma', position : 'Teacher' },
        ]
      },
      {
        name     : 'Speech and Prize Giving day',
        date     :  { day : '30', month : 'August', year : '2019' },
        venue    : 'School Premises',
        theme    : '',
        startTime: '2:00 pm',
        endTime  : '6:00 pm',
        image : '',
        fee : '5',
        speakers : [
          { name : 'Mr Ahoma', position : 'Teacher' },
          { name : 'Mr Ahoma', position : 'Teacher' },
          { name : 'Mr Ahoma', position : 'Teacher' },
        ],
      },
    ],
    pastEvents : [
      {
        name     : 'Speech and Prize Giving day 2018',
        date     :  { day : '30', month : 'March', year : '2018' },
        venue    : 'School Premises',
        theme    : '',
        startTime: '2:00 pm',
        endTime  : '6:00 pm',
        image : '',
        fee : '5',
        speakers : [
          { name : 'Mr Ahoma', position : 'Teacher' },
          { name : 'Mr Ahoma', position : 'Teacher' },
          { name : 'Mr Ahoma', position : 'Teacher' },
        ],
      },
    ],
  },
  getters   : {
    events      : (state, getters) => {
      return state.events;
    },
    pastEvents: (state, getters) => {
      return state.pastEvents;
    }
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
