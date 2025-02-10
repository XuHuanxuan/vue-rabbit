// 初始化项目文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import lazyPlugin from 'vue3-lazy'

// import { get } from '@/apis/testAPI.js'
// get().then(res => {
//     console.log(res)
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin, {
    loading: 'loading.png',
    error: 'error.png'
})

app.mount('#app')
