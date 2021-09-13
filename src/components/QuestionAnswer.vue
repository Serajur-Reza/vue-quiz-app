<template>
  <div v-if="this.$store.state.questions && Object.keys(this.$store.state.questions).length">
    <div v-if="getTheQuestion?.question">
      <h1 class='display-4'>Question Number: {{ this.$store.state.index + 1 }}</h1>
      <h2 class='display-4'>Total Score: {{ score }} / {{ this.$store.state.questions.length }}</h2>
      <h3 class='display-4'>{{ getTheQuestion.question }}</h3>

      <va-list-item v-for="(option, index) in getTheOptions" :key="index">
        <va-list-item-section>
          <va-list-item-label>
            <span class='display-4' id='option' :style="[index === selectedIndex ? {background: 'lightblue'}: {background: 'white'}]" @click="answerEvent(index)">{{option}}</span>
          </va-list-item-label>
        </va-list-item-section>
      </va-list-item>

      <va-button color='info' gradient class='mr-4' size='large' id="next" @click="nextQuestion" :disabled="this.$store.state.index === 10">{{ this.$store.state.index >= 9 ? 'The End' : 'Next Question'}}</va-button>
    </div>
    
    <div v-else>
      <h1>Your score: {{ score }} / {{ this.$store.state.questions.length }}</h1>
    </div>
    
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: "QuestionAnswer",

  data(){
    return{
      score: 0,
      selectedIndex: null,
      correctIndex: null
    }
  },

  mounted() {
    this.$store.dispatch("getQuestions");
  },

  computed:{
    getTheQuestion(){
      return this.$store.state.questions[this.$store.state.index]
    },

    getTheOptions(){
      const arr = [this.getTheQuestion.correct_answer, ...this.getTheQuestion.incorrect_answers];
      return _.shuffle(arr)
    }
  },

  methods:{
    nextQuestion(){
      this.$store.dispatch("nextQuestion")
      if(this.selectedIndex !== null || this.correctIndex !== null){
        if(this.selectedIndex === this.correctIndex){
          this.score += 1;
        }
        this.selectedIndex = null;
        this.correctIndex = null;
      }
    },

    answerEvent(index){
      this.selectedIndex = index;
      this.correctIndex = this.getTheOptions.indexOf(this.getTheQuestion.correct_answer);
    }
  }
}
</script>

<style>
  h1,h2,h3{
    margin: 10px 0px;
  }

  #option{
    margin: 10px;
    padding: 20px;
    border: 2px solid slategrey;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #option:hover{
    background: greenyellow;
  }
</style>