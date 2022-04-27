
interface ENDPOINTS_SCHEMA {
    ALL_PRODUCTS:string,
    SPECIFIC_PRODUCT:string
}

interface Category {
    type:string,
    image_url:string
}


export const API_ENDPOINTS:ENDPOINTS_SCHEMA = {
    ALL_PRODUCTS: "http://localhost:8000/ecommerce/product/",
    SPECIFIC_PRODUCT: "http://localhost:8000/ecommerce/product/"
}



export const CATEGORIES:Category[] = [{type:"Fashion", image_url:"hey"}, {type:"Sports", image_url:"nice"}]