import { createApp } from 'vue'
import App from './App.vue'
import HelloAPI from '@/services/HelloAPI'

let app = createApp(App)
app.config.globalProperties.$hello_api = HelloAPI // exporting getHelloMessage() from HelloAPI
app.mount('#app')
