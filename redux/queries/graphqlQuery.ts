import { gql } from "@apollo/client";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Habit {
	id: number;
	latestLogCompleted: boolean;
	title: string;
}

interface HabitQueryArgs {
	id: number;
}

export const graphqlApi = createApi({
	reducerPath: "graphqlApi",
	baseQuery: fetchBaseQuery({ baseUrl: "/api/graphql" }),
	endpoints: (builder) => ({
		getHabitById: builder.query<Habit, HabitQueryArgs>({
			query: ({ id }) => ({
				url: "",
				method: "POST",
				body: {
					query: `
						query Habit($habitId: Int!) {
							habit(id: $habitId) {
								title
								latestLogCompleted
								id
							}
						}
					`,
					variables: { habitId: id },
				},
			}),
		}),
	}),
});

export const { useGetHabitByIdQuery } = graphqlApi;
