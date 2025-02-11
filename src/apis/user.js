import httpInstance from '@/utils/http'

export const axiosLogin = ({ account, password }) => {
    return httpInstance({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}