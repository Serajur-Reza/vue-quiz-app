import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    questions: [],
    index: 0,
  },

  actions: {
    getQuestions({ commit }) {
      axios
        .get("https://opentdb.com/api.php?amount=10&category=21&type=multiple")
        .then((response) => {
          commit("SET_QUESTIONS", response.data.results);
        });
    },

    nextQuestion({ commit }) {
      commit("NEXT_QUESTION");
    },
  },

  mutations: {
    SET_QUESTIONS(state, questions) {
      state.questions = questions;
    },

    NEXT_QUESTION(state){
      if(state.index < state.questions.length){
        state.index = state.index + 1;
      }
    },
  },
  modules: {},
});