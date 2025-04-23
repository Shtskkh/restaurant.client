import { $api } from "./clients.ts";

export const useStaff = () => {
  return $api.useQuery("get", "/api/Staff/GetAll");
};

export const useStaffById = (id: number) => {
  return $api.useQuery("get", "/api/Staff/GetById/{id}", {
    params: {
      path: { id: id },
    },
  });
};

export const useOrders = () => {
  return $api.useQuery("get", "/api/Orders/GetAll");
};
