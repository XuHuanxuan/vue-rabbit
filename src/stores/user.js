// 管理用户数据相关
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { axiosLogin } from '@/apis/user'
import { useCartStore } from './cart'
import { axiosMergeCart } from '@/apis/cart'

export const useUserStore = defineStore('user', () => {
    // 1. 定义管理用户数据的state
    const userInfo = ref({})
    const cartstore = useCartStore()
    // 2. 定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await axiosLogin({ account, password })
        // console.log(res)
        userInfo.value = res.data.result
        await axiosMergeCart(cartstore.cartList.map(item => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count
            }
        }))
        cartstore.updateCartList()
    }
    
    const clearUserInfo = () => {
        userInfo.value = {}
        cartstore.clearCart()
    }

    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
}, {
    persist: true,
})