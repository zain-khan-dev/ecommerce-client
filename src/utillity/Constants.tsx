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

export interface FeatureSchema {
    product_id:number,
    description:string
}

export interface ProductSchema {
    id:number,
    name:string,
    description:string,
    seller:number,
    stars:number,
    category:string,
    price:number,
    images:ProductImageSchema[],
    discount:number,
    features:FeatureSchema[],
    specs:ProductSpecificationSchema,
    comments:CommentSchema[]
}


export interface CartItem {
    product_id:ProductSchema,
    quantity:number,
    price:number,
    id:number,
}

export interface OrderSchema {
    product_id:ProductSchema,
    price:number,
    quantity:number,
    order_ts:string,
    status:string,

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
    { type:'Apps & Games', image_url:booki, link:"/category/apps" }, 
    { type:'Arts, Crafts, & Sewing', image_url:paper, link:"/category/arts"  },
    { type:'Automotive Parts & Accessories', image_url:car , link:"/category/auto" },
    { type:'Baby', image_url:baby, link:"/category/baby" }, 
    { type:'Beauty & Personal Care', image_url:perso, link:"/category/beauty" }, 
    { type:'Books', image_url:books , link:"/category/books"}, 
    { type:'CDs & Vinyl', image_url:cd , link:"/category/cd"}, 
    { type:'Cell Phones & Accessories', image_url:cell , link:"/category/phones"}, 
    { type:'Clothing, Shoes and Jewelry', image_url:fashi , link:"/category/cloths"},
    { type:'Collectibles & Fine Art', image_url:diamo , link:"/category/collectibles"},
    { type:'Computers', image_url:compu , link:"/category/computers"}, 
    { type:'Electronics', image_url:circu , link:"/category/electronics"}, 
    { type:'Garden & Outdoor', image_url:garde , link:"/category/garden"}, 
    { type:'Grocery & Gourmet Food', image_url:groce , link:"/category/grocery"}, 
    { type:'Handmade', image_url:handc , link:"/category/handmade"}, 
    { type:'Health, Household & Baby Care', image_url:healt , link:"/category/health"},
    { type:'Home & Kitchen', image_url:house , link:"/category/home"}, 
    { type:'Industrial & Scientific', image_url:resea , link:"/category/industry"},
    { type:'Luggage & Travel Gear', image_url:bagga , link:"/category/luggage"},
    { type:'Movies & TV', image_url:cinem , link:"/category/movies"}, 
    { type:'Musical Instruments', image_url:live , link:"/category/instruments"}, 
    { type:'Office Products', image_url:offic , link:"/category/office"}, 
    { type:'Pet Supplies', image_url:pet , link:"/category/pet"}, 
    { type:'Sports & Outdoors', image_url:bicyc , link:"/category/sports"}, 
    { type:'Tools & Home Improvement', image_url:tools , link:"/category/tools"}, 
    { type:'Toys & Games', image_url:toys , link:"/category/toys"}, 
    { type:'Video Games', image_url:conso , link:"/category/games"} 
]

export interface CommentSchema {
    comment_by:string,
    comment_text:string,
    comment_title:string
    rating:number,
    comment_ts:string
}

export interface ProductSpecificationSchema {
    width:number
    height:number;
    manufacturer_name:string;
    measure_type:string;
    model_no:string;
    expiry_date:string;
    country_of_origin:string;
    release_date: string;
}

export const CATEGORY_MAPPING:any = {
    'appliances':'Appli',
    'apps':'Apps ',
    'arts':'Arts',
    'auto':'Auto',
    'baby':'Baby',
    'beauty':'Beaut',
    'books':'Books',
    'cd':'CDs',
    'phones':'Cell',
    'cloths':'Cloth',
    'collectibles':'Colle',
    'computers':'Compu',
    'electronics':'Elect',
    'garden':'Garde',
    'grocery':'Groce',
    'handmade':'Handm',
    'health':'Healt',
    'home':'Home',
    'industry':'Indus',
    'luggage':'Lugga',
    'movies':'Movie',
    'instruments':'Music',
    'office':'Offic',
    'pet':'Pet',
    'sports':'Sport',
    'tools':'Tools',
    'toys':'Toys',
    'games':'Video',
}


export const AUTHENTICATED_URLS = ["/cart", "/orders"] // non logged in users wont see these

export const NON_AUTHENTICATED_URLS = ["/login", "/signup"] // logged in users wont see these

export const ORDER_STATUS = [
    {key:"PL", incomplete:"Order Pending",complete:"Order Confirmed"},
    {key:"PKD", incomplete:"Order Processing",complete:"Order Processed"},
    {key:"SHP", incomplete:"Order Shipping",complete:"Order Shipped"},
    {key:"OFD", incomplete:"Out for Delivery",complete:"Order Delivered"},
    {key:"CMP", incomplete:"Order Complete",complete:"Order Complete"},
]
