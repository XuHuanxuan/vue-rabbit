import httpInstance from '@/utils/http'

export const axiosGetCheckInfo = () => {
    return httpInstance({
        url: '/member/order/pre'
    })
}

// 创建订单
export const axiosCreateOrder = (data) => {
    return httpInstance({
        url: '/member/order',
        method: 'POST',
        data
    })
}