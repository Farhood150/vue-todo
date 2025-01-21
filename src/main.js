import './assets/style.css'
import NewTask from '@/components/NewTask.vue';
import TaskItem from '@/components/TaskItem.vue';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

app.component('NewTask', NewTask)
app.component('TaskItem', TaskItem)

app.mount('#app')
