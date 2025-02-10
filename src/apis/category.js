import httpInstance from '@/utils/http'

export function axiosGetCategory(id) {
    return httpInstance({
        url: '/category',
        params: {
            id
        }
    })
}