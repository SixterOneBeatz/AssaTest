import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Element } from "../models/Element";

export const globalApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6172cfe5110a740017222e2b.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getElements: builder.query<Element[], void>({
      query: () => `elements`,
    }),
  }),
});

export const { useGetElementsQuery } = globalApi;
