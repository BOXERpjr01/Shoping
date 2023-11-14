import './assets/css/tailwind.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import vue3GoogleLogin from 'vue3-google-login';
// rest of the code

// other config

const app = createApp(App);

app.use(router);
const CLIENT_ID =
  '580283333572-hufpae42qvv7odqu4pkm0rq9hbfaf2v9.apps.googleusercontent.com';
app.use(vue3GoogleLogin, {
  clientId: CLIENT_ID,
});
app.mount('#app');
