/* Ensure that names of
 actions, mutations and getters in one module (Model)
 don't conflict with name of any other if you don't want to deal with
 name-spacing every
 else all them are called at once when used
 */
import moment from 'moment';

export default {
  namespaced: true, // this ensures that we deal with naming conflicts
  modules   : {}, // nested modules
  state     : {
    events: [
      {
        name     : 'Graduation 2019',
        date     : { day : '03', month : 'August', year : '2019' },
        startDate     : { day : '03', month : 'August', year : '2019' },
        endDate     : null,
        venue    : 'School Premises',
        theme    : 'Instilling integrity in the education process; the hope for a corruption-free tomorrow',
        startTime: '10 am',
        endTime  : '',
        image : 'gallery/g-2017/24.jpg',
        fee : '',
        speakers : [],
        description : [
          {
            head : 'The Ceremony',
            body : 'The day has come and you’re finally graduating! From picking up your gown and decorating your grad cap to making sure your parents arrive on time, you’ve worked hard for your graduation ceremony to become a reality. While walking the stage is the most important part of the ceremony, there are plenty of other things to expect. If you’re wondering what happens during a graduation ceremony, we have you covered with all of the traditions that happen on this special day below'
          },
          {
            head : 'What to Expect',
            body : 'Your graduation ceremony is also referred to as “commencement” or “convocation”. After walking the stage, you’ll go from from “graduand” to “graduate” over the course of the graduation ceremony. You’ll get to hear from esteemed teaching, guest speakers, and shake the C.E.O’s hand'
          },
          {
            head : 'Getting Seated',
            body : 'Your seating area is assigned beforehand by Class. Be sure to arrive two hours early or at the scheduled arrival time with your cap and gown so you’re prepared for the graduation ceremony. You’ll receive guidance on how to line up and where you’re sitting once you arrive, along with a name card which is given to a stage manager right before you walk the stage. If you have questions about how to wear a grad cap, staff can also help you before the ceremony. If your family arrives early, you can snap a few grad photos with them before the ceremony'
          },
          {
            head : 'Keynote Address from Guest Speaker',
            body : 'A guest speaker always gives an inspirational keynote address to the graduating class. These speeches are typically given by someone who is accomplished and can offer the graduates valuable advice for the future. The keynote address last 15-20 minutes.'
          },
          {
            head : 'Valedictory Address',
            body : 'A student representative gives a valedictory address during the ceremony, on behalf of the graduates. The valedictorian thanks family and friends for attending the ceremony and usually gives a heartfelt speech about his or her experience over the last few years.'
          },
          {
            head : 'Academic Procession and Graduates Exit',
            body : ['Once the guest speaker is finished, the academic procession makes their departure as all the graduates are asked to stand. The graduates then follow and exit the ceremony to be greeted by family and friends',
                    'Now that the ceremony is over, you can partake in all of the graduation party festivities and celebrate with your loved ones. From being showered with grad gifts to hearing how proud your parents are, graduation day is one you’ll never forget']
          }
        ]
      },
      {
        name     : 'Vacation School',
        date : null,
        startDate     : { day : '05', month : 'August', year : '2019' },
        endDate     : { day : '23', month : 'August', year : '2019' },
        venue    : 'School Premises',
        theme    : '',
        startTime: '',
        endTime  : '',
        image : 'gallery/ch/14.jpg',
        fee : '60.00',
        speakers : [],
        description : [
          {
            body : ["It's time for the long School break again and wards are going to stay home and rest for the coming academic year.", "As a parent however, it's in your best interest and that of your ward to enroll them in our well prepared \"Vacation School\" programme as it equips students with fore knowledge of what they would be studying the next academic year.", "It also enables them avoid time wastage indulgence in unwholesome activities at home while school is officially on break"]
          },
          { head : 'Please Note',
            body : [
            "At the Vacation School programme, students wear mufti and not the official school uniforms, nonetheless students are expected to dress decently",
            "Students MUST abide by All school rules, as they are still applicable",
            "Students from other schools are allowed to join",
            // "Students are expected to settle fully, the tuition fess before they are allowed entry",
            "Students are expected to report to school on time just as they do in regular school hours",
            ]
          }
        ]
      },
      {
        name     : 'Speech and Prize Giving day 2018',
        startDate     :  { day : '30', month : 'March', year : '2018' },
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
    pastEvents : [],
  },
  getters   : {
    events      : (state, getters) => {
      return state.events;
    },
    upcoming : (state, getters) => {
      return state.events.filter((event) => {
        return moment().diff(moment(`${event.startDate.year} ${event.startDate.month} ${event.startDate.day}`), 'days') < 0
      });
    },
    past: (state, getters) => {
      return state.events.filter((event) => {
        return moment().diff(moment(`${event.startDate.year} ${event.startDate.month} ${event.startDate.day}`), 'days') > 0
      });
    },
    today : (state, getters) => {
      return state.events.filter((event) => {
        return moment().diff(moment(`${event.startDate.year} ${event.startDate.month} ${event.startDate.day}`), 'days') === 0
      });
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
