import { gql } from "graphql-tag";

export const typeDefs = gql`
	type Habit {
		id: Int!
		title: String!
		latestLogCompleted: Boolean! # was latest log completed
	}

	type Log {
		id: Int
		# createdAt: DateTime!
		habit: Habit
		habitId: Int!
		completed: Boolean!
	}

	type Query {
		habit(id: Int!): Habit
	}

	type Mutation {
		createLog(habitId: Int!, completed: Boolean!): Log
	}
`;
