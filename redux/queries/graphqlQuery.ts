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

interface LogInput {
	habitId: number;
	completed: boolean;
}

interface LogResponse {
	id: number;
	createdAt: string;
	completed: boolean;
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
					query: gql`
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

		logHabit: builder.mutation<LogResponse, LogInput>({
			query: (input) => ({
				url: "",
				method: "POST",
				body: {
					query: gql`
						mutation LogHabit($input: HabitInput!) {
							LogHabit(input: $input) {
								id
								title
							}
						}
					`,
					variables: { input },
				},
			}),
		}),
	}),
});

export const { useGetHabitByIdQuery, useLogHabitMutation } = graphqlApi;
