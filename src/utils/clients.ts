import createFetchClient from "openapi-fetch";
import type { paths } from "./schema";
import createClient from "openapi-react-query";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const fetchClient = createFetchClient<paths>({
  baseUrl: "https://localhost:7280/",
});

export const $api = createClient(fetchClient);
