<template>
  <div class="question-list">
    <div
      v-for="(q, index) in questions"
      :key="index"
      :class="['question-item', { selected: selectedIndex === index }]"
      @click="$emit('select-question', index)"
    >
      {{ q.question.substring(0, 30) + (q.question.length > 30 ? '...' : '') }}
    </div>
    <fluent-button @click="$emit('add-question')">添加新问题</fluent-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Question {
  question: string;
  answers: Array<{ type: string; content: string }>;
  options: Array<{ text: string; next_question: string }>;
}

export default defineComponent({
  props: {
    questions: {
      type: Array as PropType<Question[]>,
      required: true,
    },
    selectedIndex: {
      type: Number,
      required: true,
    },
  },
  emits: ['select-question', 'add-question'],
});
</script>

<style scoped>
.question-list {
  width: 300px;
  border-right: 1px solid #e0e0e0;
  padding: 20px;
  overflow-y: auto;
}

.question-item {
  padding: 10px;
  cursor: pointer;
}

.question-item.selected {
  background-color: #e6f2ff;
}
</style>