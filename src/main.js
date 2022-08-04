import './assets/css/styles.css'
import './assets/js/scripts.js'
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
