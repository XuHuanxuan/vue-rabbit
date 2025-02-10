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