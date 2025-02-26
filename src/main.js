// 初始化项目文件
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import lazyPlugin from 'vue3-lazy'

// import { get } from '@/apis/testAPI.js'
// get().then(res => {
//     console.log(res)
// })

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(lazyPlugin, {
    loading: 'loading.png',
    error: 'error.png'
})

app.mount('#app')
