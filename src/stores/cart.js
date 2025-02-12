import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
    // 1. 定义state - cartList
    const cartList = ref([])
    // 2. 定义action - addCart
    const addCart = (goods) => {
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
    }

    const delCart = (skuId) => {
        const index = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(index, 1)
    }

    const allGoodCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))

    const allGoodPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
    return {
        cartList,
        addCart,
        delCart,
        allGoodCount,
        allGoodPrice
    }
}, {
    persist: true,
})