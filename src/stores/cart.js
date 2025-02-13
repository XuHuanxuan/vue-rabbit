import { defineStore } from 'pinia'
import { useUserStore } from './user'
import { axiosInsertCart, axiosGetCartList, axiosDelCart } from '@/apis/cart'
import { ElMessage } from 'element-plus'
import { computed, ref } from 'vue'
import 'element-plus/theme-chalk/el-message.css'

export const useCartStore = defineStore('cart', () => {
    const userStore = useUserStore()
    const isLogin = computed(() => userStore.userInfo.token)
    // 1. 定义state - cartList
    const cartList = ref([])

    const updateCartList = async () => {
        const res = await axiosGetCartList()
        // console.log(res)
        cartList.value = res.data.result
    }

    // 2. 定义action - addCart
    const addCart = async (goods) => {
        const { skuId, count } = goods
        if (isLogin.value) {
            await axiosInsertCart({ skuId, count })
            updateCartList()
            ElMessage.success('加入购物车成功')
        } else {
            // console.log('添加', goods)
            // 添加购物车操作
            // 已添加过 - count + 1
            // 没有添加过 - 直接push
            // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                // 找到了
                console.log(item)
                item.count += goods.count
            } else {
                // 没找到
                cartList.value.push(goods)
            }
            ElMessage.success('加入购物车成功')
        }
    }

    const delCart = async(skuId) => {
        if (isLogin.value) {
            await axiosDelCart([skuId])
            updateCartList()
        } else {
            const index = cartList.value.findIndex((item) => skuId === item.skuId)
            cartList.value.splice(index, 1)
        }
    }

    const clearCart = () => {
        cartList.value = []
    }

    const changeCheck = (skuId, selected) => {
        const item = cartList.value.find((item) => item.skuId === skuId)
        item.selected = selected
    }

    const allCheckChange = (selected) => {
        cartList.value.forEach(item => item.selected = selected)
    }

    const allGoodCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))

    const allGoodPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

    const isSelectedAll = computed(() => cartList.value.every((item) => item.selected))

    const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))

    const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
    
    return {
        cartList,
        addCart,
        delCart,
        clearCart,
        changeCheck,
        allCheckChange,
        updateCartList,
        allGoodCount,
        allGoodPrice,
        isSelectedAll,
        selectedCount,
        selectedPrice
    }
}, {
    persist: true,
})