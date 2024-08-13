import { createApp } from 'vue'
import './style.css'

import { 
  fluentButton,
  fluentTextField,
  // fluentDropdown,
  fluentOption,
  provideFluentDesignSystem
} from '@fluentui/web-components';

// 注册 Fluent UI Web Components
provideFluentDesignSystem()
  .register(
    fluentButton(),
    fluentTextField(),
    // fluentDropdown(),
    fluentOption()
  );

import App from './App.vue'

createApp(App).mount('#app')
