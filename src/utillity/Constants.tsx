
interface ENDPOINTS_SCHEMA {
    ALL_PRODUCTS:string,
    SPECIFIC_PRODUCT:string,
    ALL_ORDERS:string
}

interface Category {
    type:string,
    image_url:string
}


export const API_ENDPOINTS:ENDPOINTS_SCHEMA = {
    ALL_PRODUCTS: "http://localhost:8000/ecommerce/product/",
    SPECIFIC_PRODUCT: "http://localhost:8000/ecommerce/product/",
    ALL_ORDERS: "http://localhost:8000/ecommerce/orders/"
}

export const BASE_URL:string = "http://localhost:8000/ecommerce/"

export const CATEGORIES:Category[] = [{type:"Fashion", image_url:"hey"}, {type:"Sports", image_url:"nice"}]


export interface Order {
    status:string;
    customer_id:number;
    product_id:number
}