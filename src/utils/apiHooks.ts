﻿import { $api } from "./clients.ts";

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

export const useOrderById = (id: number) => {
  return $api.useQuery("get", "/api/Orders/GetById/{id}", {
    params: {
      path: { id: id },
    },
  });
};

export const useDishes = () => {
  return $api.useQuery("get", "/api/Dishes/GetAll");
};

export const useDish = (id: number) => {
  return $api.useQuery("get", "/api/Dishes/GetById/{id}", {
    params: {
      path: { id: id },
    },
  });
};

export const useAuth = (login: string, password: string) => {
  return $api.useQuery(
    "post",
    "/api/Auth/login",
    {
      body: {
        login: login,
        password: password,
      },
    },
    {
      enabled: false,
    },
  );
};

export const useSupplies = () => {
  return $api.useQuery("get", "/api/Supplies/GetAll");
};
