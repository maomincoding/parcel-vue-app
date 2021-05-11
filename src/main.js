import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { Button, Input } from 'ant-design-vue';
process.env.NODE_ENV === 'development' && require('./mock/index.js');
import './styles/index.scss'; //全局scss

const app = createApp(App);
app.use(Button).use(Input);
app.use(router).use(store).mount('#app');
