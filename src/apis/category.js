import axiosClient from "../apis/axiosInstance";
const categoryEndpoint = "/categories"
const getAllCategoryEndpoint = "/all"

function getAllCategory()
{
    return axiosClient.get(`${categoryEndpoint}${getAllCategoryEndpoint}`)
}

function getCategoryList(pageNumber, pageSize)
{
    return axiosClient.get(`${categoryEndpoint}`,{
        params:{
            pn:pageNumber,
            limit:pageSize
        }
    })
}


export {
    getAllCategory,
    getCategoryList
}