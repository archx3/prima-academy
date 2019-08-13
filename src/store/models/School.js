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
      logo : '',
      coreValues : ['Respect', 'Integrity', 'Exellence', 'Perseverance', 'Teamwork']
    },
    academicSections : [
      {
        name : 'Pre School',
        description : 'The preschool is an establishment or learning space offering early childhood foundational education to children before they begin compulsory education at primary school.',
        pic : '7.jpg'
      },
      {
        name : 'Primary School',
        description : 'The stage school where children receive primary or elementary education from the age of about seven to twelve, coming after preschool, infant school and before high school.',
        pic : '4.jpg'
      },
      {
        name : 'Junior High',
        description : 'A middle school providing education between primary school and high school for children that have completed primary school, but are not yet old enough for high school.',
        pic : '3.jpg'
      },
    ],
    awardsAndAchievements : [],
    successStory : '',
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
        pic : 'aisha-asi-akrofi.JPG',
        name : 'Aisha Asi Akrofi',
        role : 'C.E.O',
        email : 'asimonalisa@gmail.com',
      },
      {
        pic : 'ayisah-akrofi.JPG',
        name : 'Ayisah Akrofi',
        role : 'Director Of Administration',
        email : 'asimonalisa@gmail.com',
      },
      {
        pic : 'ahumah-akrofi.jpg',
        name : 'Ahumah Akrofi',
        role : 'Director of Academics',
      },
      {
        pic : 'aisah-mohammmed.JPG',
        name : 'Aisah Mohammmed',
        role : 'Supervisor',
        phone : '+233 260 721 1202',
        skype : '',
        bio : ''
      },
      {
        pic : 'felix-kofi-fianoo.jpg',
        name : 'Felix Kofi Fianoo',
        role : 'Head master',
      },
      {
        pic : 'comfort-adams.jpg',
        name : 'Comfort Adams',
        role : 'Burser',
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
