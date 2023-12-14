import { Inter } from "next/font/google";
import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ Component, pageProps }: AppProps) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			TEST
		</main>
	);
}
