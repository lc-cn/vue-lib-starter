import {createApp} from "vue";
import App from "./App.vue";
import GraceUI from "grace-ui";
import router from "./router";
import 'grace-ui/styles/index.scss'
createApp(App)
    .use(router)
    .use(GraceUI)
    .mount('#app')
