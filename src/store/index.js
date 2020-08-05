import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    matches:'',
    teams:'',
    logo:'',
    initial:'',
    imgprofile:''
    
  },
  mutations: {
    saveMatches(state,database){
      state.matches = database
    },
    saveTeams(state,database){
      state.teams = database
    },
    getLogo(state ,name) {
      var logo = "";
      for(var e in state.teams){
        if (state.teams[e].name === name) {
          logo = state.teams[e].logo;
        }
      }
      state.logo = logo
    },
    changeName(state, name){
      let initial = name
      for(var e in state.teams){
        if(state.teams[e].name === name){
          initial = state.teams[e].initial
        }
      }
      state.initial = initial
    }
  },
  actions: {
  },
  modules: {
  }
})