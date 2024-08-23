import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue3Lottie from 'vue3-lottie'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'vue3-toastify/dist/index.css';
import  AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(Vue3Lottie)
app.mount('#app')

AOS.init()