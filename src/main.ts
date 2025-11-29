import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { getDeviceService, DEVICE_KEY } from './config/appServices';

const app = createApp(App);

app.use(router);

// Provide bound review use cases to the app's DI container
app.provide(DEVICE_KEY, getDeviceService());

app.mount('#app');
