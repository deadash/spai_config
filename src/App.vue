<template>
  <div id="app">
    <header>
      <h1>问题编辑器</h1>
    </header>
    <main>
      <QuestionEditor />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import QuestionEditor from './components/QuestionEditor.vue';

export default defineComponent({
  name: 'App',
  components: {
    QuestionEditor,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

main {
  max-width: 1200px;
  margin: 0 auto;
}
</style>