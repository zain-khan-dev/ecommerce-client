import appli from '../asset/appliances.png'
import booki from '../asset/booking.png'
import paper from '../asset/paper-crafts.png'
import car from '../asset/car-repair.png'
import baby from '../asset/baby-boy.png'
import perso from '../asset/personal-hygiene.png'
import books from '../asset/books.png'
import cd from '../asset/cd-rom.png'
import cell from '../asset/cell-phone.png'
import fashi from '../asset/fashion.png'
import diamo from '../asset/diamond.png'
import compu from '../asset/computer.png'
import circu from '../asset/circuit-board.png'
import garde from '../asset/gardening.png'
import groce from '../asset/grocery.png'
import handc from '../asset/handcraft.png'
import healt from '../asset/healthcare.png'
import house from '../asset/house.png'
import resea from '../asset/research.png'
import bagga from '../asset/baggage.png'
import cinem from '../asset/cinema.png'
import live from '../asset/live-music.png'
import offic from '../asset/office.png'
import pet from '../asset/pet-food.png'
import bicyc from '../asset/bicycle.png'
import tools from '../asset/tools.png'
import toys from '../asset/toys.png'
import conso from '../asset/console.png'



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
    ALL_ORDERS: "http://localhost:8000/ecommerce/order/"
}

export const BASE_URL:string = "http://localhost:8000/ecommerce/"

export interface Order {
    status:string;
    customer_id:number;
    product_id:number
}

export interface ProductImageSchema {
    id:number,
    src:string,
    product_id:number
}


export interface ProductSchema {
    id:number,
    name:string,
    description:string,
    seller:number,
    stars:number,
    price:number,
    images:ProductImageSchema[],
    discount:number
}


export interface CartItem {
    name:string,
    description:string,
    quantity:number,
    price:number
}

export interface OrderSchema {
    product_id:ProductSchema,
    price:number,
    quantity:number,
    order_ts:string,
    status:string
}


export interface CategorySchema {
    type:string,
    image_url:string,
    link:string
}


export const MIN_ORDER = 1

export const MAX_ORDER = 20



export const CATEGORIES:CategorySchema[] = [
    { type:'Appliances', image_url:appli , link:"/category/appliances"},
    { type:'Apps & Games', image_url:booki, link:"/category/apps&games" },
    { type:'Arts, Crafts, & Sewing', image_url:paper, link:"/category/arts&craft" },
    { type:'Automotive Parts & Accessories', image_url:car , link:"/category/auto"},
    { type:'Baby', image_url:baby, link:"/category/baby" },
    { type:'Beauty & Personal Care', image_url:perso, link:"/category/beauty" },
    { type:'Books', image_url:books , link:"/category/books"},
    { type:'CDs & Vinyl', image_url:cd , link:"/category/cd"},
    { type:'Cell Phones & Accessories', image_url:cell , link:"/category/phones"},
    { type:'Clothing, Shoes and Jewelry', image_url:fashi , link:"/category/cloths"},
    { type:'Collectibles & Fine Art', image_url:diamo , link:"/category/collectibles"},
    { type:'Computers', image_url:compu , link:"/category/computers"},
    { type:'Electronics', image_url:circu , link:"/category/electronics"},
    { type:'Garden & Outdoor', image_url:garde , link:"/category/garden&outdoor"},
    { type:'Grocery & Gourmet Food', image_url:groce , link:"/category/grocery"},
    { type:'Handmade', image_url:handc , link:"/category/handmade"},
    { type:'Health, Household & Baby Care', image_url:healt , link:"/category/health&care"},
    { type:'Home & Kitchen', image_url:house , link:"/category/home&kitchen"},
    { type:'Industrial & Scientific', image_url:resea , link:"/category/industry&scientific"},
    { type:'Luggage & Travel Gear', image_url:bagga , link:"/category/luggage&travel"},
    { type:'Movies & TV', image_url:cinem , link:"/category/movies&tv"},
    { type:'Musical Instruments', image_url:live , link:"/category/instruments"},
    { type:'Office Products', image_url:offic , link:"/category/office"},
    { type:'Pet Supplies', image_url:pet , link:"/category/pet"},
    { type:'Sports & Outdoors', image_url:bicyc , link:"/category/sports"},
    { type:'Tools & Home Improvement', image_url:tools , link:"/category/tools"},
    { type:'Toys & Games', image_url:toys , link:"/category/toys"},
    { type:'Video Games', image_url:conso , link:"/category/games"}
]

export interface CommentSchema {
    comment_by:string
    text:string
}