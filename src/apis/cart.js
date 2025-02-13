import httpInstance from "@/utils/http"

// 加入购物车
export const axiosInsertCart = ({ skuId, count }) => {
    return httpInstance({
        url: '/member/cart',
        method: 'POST',
        data: {
            skuId,
            count
        }
    })
}

// 获取购物车列表
export const axiosGetCartList = () => {
    return httpInstance({
        url: '/member/cart'
    })
}

// delcart
export const axiosDelCart = (ids) => {
    return httpInstance({
        url: '/member/cart',
        method: 'DELETE',
        data: {
            ids
        }
    })
}

// 合并购物车
export const axiosMergeCart = (data) => {
    return httpInstance({
        url: '/member/cart/merge',
        method: 'POST',
        data
    })
}