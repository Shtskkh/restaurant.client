import { createFileRoute } from "@tanstack/react-router";
import pageLayout from "../../../../components/layouts/pageLayout.tsx";
import { $api } from "../../../../utils/clients.ts";
import errorComponent from "../../../../components/errorComponent.tsx";

export const Route = createFileRoute("/_auth/dishes_/$id")({
  loader: async ({ params: { id }, context: { queryClient } }) => {
    const data = await queryClient
      .ensureQueryData(
        $api.queryOptions("get", "/api/Dishes/GetById/{id}", {
          params: {
            path: { id: parseInt(id) },
          },
        }),
      )
      .then((data) => data);
    console.log(data);
    return {
      title: data.title,
    };
  },
  head: ({ loaderData: { title } }) => ({
    meta: [{ title: `${title}` }],
  }),
  component: () => pageLayout(`${Route.useLoaderData().title}`),
  errorComponent: ({ error }) => errorComponent(error),
});
