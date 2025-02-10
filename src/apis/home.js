/**
 * @description: 获取banner图
 * @param {*}
 * @return {*}
 */
import httpInstance from '@/utils/http'
export function axiosGetBanner() {
    return httpInstance({
        url: 'home/banner'
    })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export function axiosGetNew() {
    return httpInstance({
        url: '/home/new'
    })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const axiosGetHot = () => {
    return httpInstance({
        url: 'home/hot'
    })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const axiosGetGoods = () => {
    return httpInstance({
        url: '/home/goods'
    })
}