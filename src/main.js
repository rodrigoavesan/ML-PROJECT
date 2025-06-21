import { createApp } from 'vue'
import App from '@/App.vue'
import router from './router/index.js'
import '@/styles/fonts.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

createApp(App).use(router).mount('#app')
