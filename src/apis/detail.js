import httpInstance from '@/utils/http'

export const axiosGetGoodDetail = (id) => {
    return httpInstance({
        url: '/goods',
        params: {
            id
        }
    })
}