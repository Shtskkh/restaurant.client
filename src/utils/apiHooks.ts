import { $api } from "./fetchClient.ts";
import { useQuery } from "@tanstack/react-query";

export const useStaff = () => {
  return useQuery($api.queryOptions("get", "/api/Staff/GetAll"));
};
