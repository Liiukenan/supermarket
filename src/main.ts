import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Row, Col, Button, Swipe, SwipeItem, Lazyload } from 'vant'
import 'vant/lib/index.css'
createApp(App)
  .use(Row)
  .use(router)
  .use(Col)
  .use(Button)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload)
  .mount('#app')
