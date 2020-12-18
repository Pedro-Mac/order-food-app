export interface payload {
  itemName: string;
  itemPrice: number;
  quantity: number;
  id: string;
}
export interface actionType {
  type: string;
  payload: payload;
}
export interface stateType {
  cartItems: payload[];
  totalPrice: number;
}
