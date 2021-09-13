<template>
  <div id="app">
    <h1 class='display-1'>Vue Quiz</h1>
    <question-answer/>
  </div>
</template>

<script>
import QuestionAnswer from './components/QuestionAnswer.vue'

export default {

  name: 'App',
  components:{
    QuestionAnswer
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px 20px;
}

h1{
  text-decoration: underline;
}
</style>