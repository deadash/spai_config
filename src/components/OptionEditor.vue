<template>
    <div class="option-editor">
      <h3>选项</h3>
      <div v-for="(option, index) in options" :key="index" class="option-item">
        <fluent-text-field
          v-model="option.text"
          placeholder="选项文本"
        ></fluent-text-field>
        <fluent-text-field
          v-model="option.next_question"
          placeholder="下一个问题"
        ></fluent-text-field>
        <fluent-button @click="$emit('remove-option', index)">删除</fluent-button>
      </div>
      <fluent-button @click="addOption">添加选项</fluent-button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  
  interface Option {
    text: string;
    next_question: string;
  }
  
  export default defineComponent({
    props: {
      options: {
        type: Array as PropType<Option[]>,
        required: true,
      },
    },
    emits: ['add-option', 'remove-option'],
    setup(props, { emit }) {
      function addOption() {
        emit('add-option', { text: '', next_question: '' });
      }
  
      return {
        addOption,
      };
    },
  });
  </script>
  
  <style scoped>
  .option-item {
    display: flex;
    margin-bottom: 10px;
    gap: 10px;
  }
  </style>