import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./schema/resolvers";
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
	prisma = new PrismaClient();
} else {
	if (!(global as any).prisma) {
		(global as any).prisma = new PrismaClient();
	}
	prisma = (global as any).prisma;
}

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

// const handler = startServerAndCreateNextHandler<NextRequest>(server, {
// 	context: async (req) => ({ req, prisma }),
// });

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
