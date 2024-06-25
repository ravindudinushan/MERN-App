import {ProductModel} from "./ProductModel";


export interface CartItem {
    product: ProductModel,
    itemCount: number
}