import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import jquery from 'jquery'




const app = createApp(App)

app.use(VueAxios, axios,jquery)

app.use(router)

app.mount('#app')
