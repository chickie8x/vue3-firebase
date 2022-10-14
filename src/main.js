import { createApp } from "vue";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";

import App from "./App.vue";
import router from "./router";

import "./assets/base.css";

const firebaseConfig = {
  apiKey: "AIzaSyD_IkjoEZXi33gGFxKJJRehF-Ui-nLtfq0",
  authDomain: "test-vue3-1d580.firebaseapp.com",
  projectId: "test-vue3-1d580",
  storageBucket: "test-vue3-1d580.appspot.com",
  messagingSenderId: "846720212172",
  appId: "1:846720212172:web:6628bee24aae2e79167669",
  measurementId: "G-EDWNDRS2CN",
};

const app = createApp(App);

app.use(createPinia());
app.use(router);
// Initialize Firebase
initializeApp(firebaseConfig);
app.mount("#app");
