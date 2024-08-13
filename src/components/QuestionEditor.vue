<template>
    <div class="question-editor-container">
      <QuestionList
        :questions="questions"
        :selectedIndex="selectedQuestionIndex"
        @select-question="selectQuestion"
        @add-question="addNewQuestion"
      />
      <div class="edit-area" v-if="selectedQuestion">
        <fluent-text-field
          v-model="selectedQuestion.question"
          placeholder="输入问题"
          multiline
          rows="3"
        ></fluent-text-field>
  
        <AnswerEditor
          :answers="selectedQuestion.answers"
          @add-answer="addAnswer"
          @remove-answer="removeAnswer"
        />
  
        <OptionEditor
          :options="selectedQuestion.options"
          @add-option="addOption"
          @remove-option="removeOption"
        />
  
        <fluent-button appearance="accent" @click="saveQuestion">保存问题</fluent-button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import QuestionList from './QuestionList.vue';
  import AnswerEditor from './AnswerEditor.vue';
  import OptionEditor from './OptionEditor.vue';
  
  export default defineComponent({
    components: {
      QuestionList,
      AnswerEditor,
      OptionEditor,
    },
    setup() {
      const questions = ref([]);
      const selectedQuestionIndex = ref(-1);
  
      const selectedQuestion = computed(() => 
        selectedQuestionIndex.value >= 0 ? questions.value[selectedQuestionIndex.value] : null
      );
  
      function addNewQuestion() {
        questions.value.push({
          question: '',
          answers: [],
          options: [],
        });
        selectedQuestionIndex.value = questions.value.length - 1;
      }
  
      function selectQuestion(index: number) {
        selectedQuestionIndex.value = index;
      }
  
      function addAnswer(answer: { type: string; content: string }) {
        selectedQuestion.value.answers.push(answer);
      }
  
      function removeAnswer(index: number) {
        selectedQuestion.value.answers.splice(index, 1);
      }
  
      function addOption(option: { text: string; next_question: string }) {
        selectedQuestion.value.options.push(option);
      }
  
      function removeOption(index: number) {
        selectedQuestion.value.options.splice(index, 1);
      }
  
      function saveQuestion() {
        console.log('保存问题:', selectedQuestion.value);
      }
  
      return {
        questions,
        selectedQuestionIndex,
        selectedQuestion,
        addNewQuestion,
        selectQuestion,
        addAnswer,
        removeAnswer,
        addOption,
        removeOption,
        saveQuestion,
      };
    },
  });
  </script>
  
  <style scoped>
  .question-editor-container {
    display: flex;
    height: 100vh;
  }
  
  .edit-area {
    flex-grow: 1;
    padding: 20px;
    overflow-y: auto;
  }
  </style>