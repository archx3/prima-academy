import Vue  from 'vue';
import Vuex from 'vuex';
// import lodash from 'lodash'

import school from './models/School'
import address from './models/Address'
import events from './models/Events'
import gallery from './models/Gallery'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules : {
    school,
    address,
    events,
    gallery,
  },
  mutations : {

  }
});
