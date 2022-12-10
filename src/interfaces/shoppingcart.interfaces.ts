export interface IShoppingCart {
  id: number;
  userId: number;
  date: string;
  products: IShoppingCartProduct[];
  __v: number;
}

export interface IShoppingCartProduct {
  productId: number;
  quantity: number;
}
