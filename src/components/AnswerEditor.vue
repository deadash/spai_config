<template>
    <div class="answer-editor">
      <h3>回答</h3>
      <div v-for="(answer, index) in answers" :key="index" class="answer-item">
        <fluent-dropdown>
          <fluent-option
            v-for="option in answerTypeOptions"
            :key="option.value"
            :value="option.value"
            :selected="answer.type === option.value"
          >
            {{ option.label }}
          </fluent-option>
        </fluent-dropdown>
        <fluent-text-field
          v-model="answer.content"
          placeholder="输入答案内容"
        ></fluent-text-field>
        <fluent-button @click="$emit('remove-answer', index)">删除</fluent-button>
      </div>
      <fluent-button @click="addAnswer">添加回答</fluent-button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  interface Answer {
    type: string;
    content: string;
  }
  
  export default defineComponent({
    props: {
      answers: {
        type: Array as PropType<Answer[]>,
        required: true,
      },
    },
    emits: ['add-answer', 'remove-answer'],
    setup(props, { emit }) {
      const answerTypeOptions = [
        { value: 'text', label: 'Text' },
        { value: 'title', label: 'Title' },
        { value: 'h1', label: 'H1' },
      ];
  
      function addAnswer() {
        emit('add-answer', { type: 'text', content: '' });
      }
  
      return {
        answerTypeOptions,
        addAnswer,
      };
    },
  });
  </script>
  
  <style scoped>
  .answer-item {
    display: flex;
    margin-bottom: 10px;
    gap: 10px;
  }
  </style>