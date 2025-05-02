import { components } from "./schema";

export type Staff = components["schemas"]["StaffModel"];
export type Dish = components["schemas"]["DishModel"];
export type ProductInDish = components["schemas"]["ProductInDishModel"];
export type Order = components["schemas"]["OrderModel"];
export type DishInOrder = components["schemas"]["DishInOrderModel"];
export type RequestError = components["schemas"]["ProblemDetails"];
export type Supply = components["schemas"]["SupplyModel"];
