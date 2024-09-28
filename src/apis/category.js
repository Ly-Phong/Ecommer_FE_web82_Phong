import axiosClient from "../apis/axiosInstance";
const categoryEndpoint = "/categories"
const getAllCategoryEndpoint = "/all"

function getAllCategory()
{
    return axiosClient.get(`${categoryEndpoint}${getAllCategoryEndpoint}`)
}

export {
    getAllCategory
}