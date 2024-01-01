import { createApp } from 'vue'
import App from './App.vue'
import VueCarousel from "vue3-carousel";
import './assets/css/style.css'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(VueCarousel)
app.mount('#app')
