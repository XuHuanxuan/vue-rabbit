import httpInstance from "@/utils/http"

export function axiosGetLayoutCategory() {
    return httpInstance({
        url: '/home/category/head'
    })
}