import createFetchClient from "openapi-fetch";
import type { paths } from "./schema";
import createClient from "openapi-react-query";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const fetchClient = createFetchClient<paths>({
  baseUrl: "http://localhost:7280/",
});

export const $api = createClient(fetchClient);
