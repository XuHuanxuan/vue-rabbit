import { ref } from 'vue'
import { defineStore } from 'pinia'
import { axiosGetLayoutCategory } from '@/apis/layout'
export const useCategoryStore = defineStore('category', () => {
    // 导航列表的数据管理
    // state 导航列表数据
    const categoryList = ref([])

    // action 获取导航数据的方法
    const getCategory = async () => {
        const res = await axiosGetLayoutCategory()
        // console.log(res)
        categoryList.value = res.data.result
    }

    return {
        categoryList,
        getCategory
    }
})