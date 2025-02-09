import httpInstance from "@/utils/http"

export function axiosGetCategory() {
    return httpInstance({
        url: '/home/category/head'
    })
}