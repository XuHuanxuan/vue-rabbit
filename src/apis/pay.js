import httpInstance from '@/utils/http'

export const axiosGetOrder = (id) => {
    return httpInstance({
        url: `/member/order/${id}`
    })
}