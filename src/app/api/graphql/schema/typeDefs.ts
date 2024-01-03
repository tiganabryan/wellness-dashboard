import { gql } from "graphql-tag";

export const typeDefs = gql`
	type Habit {
		id: Int!
		title: String!
		latestLogCompleted: Boolean! # New field for latest log completion status
	}

	type Query {
		habit(id: Int!): Habit
	}
`;
