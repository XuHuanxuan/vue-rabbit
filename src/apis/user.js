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

export const axiosGetLikeList = ({ limit = 4 }) => {
    return httpInstance({
        url: '/goods/relevant',
        params: {
            limit
        }
    })
}

/*
params: {
    orderState:0,
  page:1,
  pageSize:2
}
*/
export const axiosGetUserOrder = (params) => {
    return httpInstance({
        url: '/member/order',
        method: 'GET',
        params
    })
}