import httpInstance from "@/utils/http";

export const axiosGetCheckInfo = () => {
    return httpInstance({
        url: '/member/order/pre'
    })
}